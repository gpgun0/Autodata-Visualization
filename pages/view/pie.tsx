import React from "react";
import { PieChart } from "@opd/g2plot-react";

const config = {
  forceFit: true,
  title: {
    visible: true,
    text: "Pia Chart By Ahmad"
  },
  description: {
    visible: true,
    text: "This is just a demo"
  },
  radius: 0.8,
  data: [
    {
      type: "Type 1",
      value: 27
    },
    {
      type: "Type 2",
      value: 25
    },
    {
      type: "Type 3",
      value: 18
    },
    {
      type: "Type 4",
      value: 15
    },
    {
      type: "Type 5",
      value: 10
    },
    {
      type: "Type 6",
      value: 5
    }
  ],
  angleField: "value",
  colorField: "type",
  label: {
    visible: true,
    type: "inner"
  }
};

export default () => (
  <section>
    <PieChart {...config} />
  </section>
);
