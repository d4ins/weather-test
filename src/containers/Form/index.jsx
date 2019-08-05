import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { isValidCity } from "@validators";

import Form from "@components/Form";

import { startSearch } from "@redux/modules/weather";

class FormContainer extends React.PureComponent {
  state = {
    city: ""
  }

  onChange = ({ target: { value } }) => {
    this.setState({ city: value });
  }

  onSearch = () => {
    const { city } = this.state;
    const { prevCity } = this.props;

    if (isValidCity(city) && city.trim() !== prevCity.trim()) {
      this.props.onSearch(city);
    }
  }

  render() {
    return (
      <Form
        value={this.state.city}
        onSearch={this.onSearch}
        onChange={this.onChange}
      />
    );
  }
}

FormContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
  prevCity: PropTypes.string.isRequired
};

const mapDispatchToProps = {
  onSearch: startSearch
};

const mapStateToProps = state => ({
  prevCity: state.weather.city
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
