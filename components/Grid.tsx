import { Col, Row, Slider } from 'antd'
import { useState } from 'react'
import Image from 'next/image'
import carView from '../assets/img/man-driving-car-from-rear-view.jpg'

import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload } from 'antd'
import React from 'react'

const { Dragger } = Upload

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

const gutters: Record<string, number> = {}
const vgutters: Record<string, number> = {}
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
  const [rowCountKey, setRowCountKey] = useState(1)

  const cols = []
  const colCount = colCounts[colCountKey]
  const rows = []
  const rowCount = rowCounts[rowCountKey]

  const imgList = [
    {
      id: '117',
      author: 'Daniel Ebersole',
      width: 1544,
      height: 1024,
      url: 'https://unsplash.com/photos/Q14J2k8VE3U',
      download_url: 'https://picsum.photos/id/117/1544/1024',
    },
    {
      id: '118',
      author: 'Rick Waalders',
      width: 1500,
      height: 1000,
      url: 'https://unsplash.com/photos/d-Cr8MEW5Uc',
      download_url: 'https://picsum.photos/id/118/1500/1000',
    },
    {
      id: '119',
      author: 'Nadir Balcikli',
      width: 3264,
      height: 2176,
      url: 'https://unsplash.com/photos/wE9nUW7tMmk',
      download_url: 'https://picsum.photos/id/119/3264/2176',
    },
    {
      id: '12',
      author: 'Paul Jarvis',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/I_9ILwtsl_k',
      download_url: 'https://picsum.photos/id/12/2500/1667',
    },
    {
      id: '120',
      author: 'Guillaume',
      width: 4928,
      height: 3264,
      url: 'https://unsplash.com/photos/_DA3D5P71qs',
      download_url: 'https://picsum.photos/id/120/4928/3264',
    },
  ]

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
                src={carView}
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
      <span>n X n</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tooltip={{ formatter: value => value && colCounts[value] }}
        />
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
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
