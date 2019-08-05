import React from "react";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import { Line, Bar, Polar } from "react-chartjs-2";

import { GRAPH_STYLE } from "@constants";

import "./styles.css";

function Graphs({ data }) {
  return (
    <Carousel dotPosition="bottom" draggable={true}>
      <Line {...GRAPH_STYLE} data={data} />
      <Bar {...GRAPH_STYLE} data={data} />
      <Polar {...GRAPH_STYLE} data={data} />
    </Carousel>
  );
}

Graphs.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Graphs;
