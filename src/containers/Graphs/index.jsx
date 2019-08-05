import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spin, Result, Empty } from "antd";

import { GRAPH_DATASET_STYLE } from "@constants";

import Graphs from "@components/Graphs";

class GraphsContainer extends React.Component {
  state = {
    labels: [],
    datasets: [{
      ...GRAPH_DATASET_STYLE,
      data: []
    }],
  };

  static getDerivedStateFromProps(nextProps) {
    return  {
      labels: nextProps.weather.chartData.labels,
      datasets: [{
        ...GRAPH_DATASET_STYLE,
        data: nextProps.weather.chartData.data,
      }],
    };
  }

  render() {
    const { weather } = this.props;

    if (weather.loading) {
      return <Spin tip="Loading..."/>;
    }

    if (weather.error) {
      return (
        <Result
          status={String(weather.error.status)}
          title={weather.error.status}
          subTitle={weather.error.text}
        />
      );
    }

    if (!weather.chartData.labels) {
      return <Empty description="Try some search :)" />;
    }

    return <Graphs data={this.state} />;
  }
}

GraphsContainer.propTypes = {
  weather: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps, null)(GraphsContainer);
