import { Col, Row, Slider } from 'antd'
import { useState } from 'react'
import Image from 'next/image'
import carView from '../assets/img/man-driving-car-from-rear-view.jpg'
import carView2 from '../assets/img/360_F_309129539_Zy0wYLy0YEUGcuW1OZKaoCwf6WMQQs2q.jpeg'
import carView3 from '../assets/img/inside-car-view-11826599.jpeg'

import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'
import React from 'react'

const { Dragger } = Upload

const colCounts: Record<string, number> = {}
const rowCounts: Record<string, number> = {}

import { Popover } from 'antd'

const content = (
  <div>
    <p>Name</p>
    <p>Description</p>
  </div>
)

;[1, 2, 3, 4, 6, 8].forEach((value, i) => {
  colCounts[i] = value
})
;[1, 2, 3, 4, 6, 8].forEach((value, i) => {
  rowCounts[i] = value
})

const Grid: React.FC = () => {
  const [colCountKey, setColCountKey] = useState(1)
  const [state, setState] = useState(0)

  const props: UploadProps = {
    name: 'file',
    multiple: true,

    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        setState(state + 1)
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  const cols = []
  const colCount = colCounts[colCountKey]
  const rows = []

  for (let j = 0; j < colCount; j++) {
    cols.splice(0, cols.length)

    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Popover content={content} title={`Figure ${j * colCount + i}`}>
          <Col
            key={i.toString()}
            span={24 / colCount}
            style={{
              background: 'transparent',
              border: 0,
            }}
          >
            <div
              style={{
                fontSize: '1.5rem',
                height: '100%',
                background: '#0092ff',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={state === 0 ? carView : state === 1 ? carView2 : carView3}
                alt="car"
                style={{
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          </Col>
        </Popover>,
      )
    }
    rows.push(cols)
  }

  return (
    <>
      <span>
        {colCountKey + 1} X {colCountKey + 1}
      </span>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Slider
          min={0}
          style={{
            width: '488px',
          }}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tooltip={{ formatter: value => value && colCounts[value] }}
        />
        <Dragger
          {...props}
          style={{
            width: '256px',
            height: '256px',
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      </div>

      <Row
        gutter={[16, 16]}
        style={{
          height: '100%',
        }}
      >
        {rows}
      </Row>
    </>
  )
}

export default Grid
