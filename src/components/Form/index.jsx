import React from "react";
import PropTypes from "prop-types";
import { Button, Input, Card } from "antd";

import "./styles.css";

function Form({ onSearch, value, onChange }) {
  return (
    <Card className="form" title="Intelecy challenge!">
      <Input
        value={value}
        onChange={onChange}
        onPressEnter={onSearch}
        placeholder="Enter a city"
      />
      <Button
        size="large"
        icon="search"
        type="primary"
        onClick={onSearch}
        className="form-button"
      >
        Search
      </Button>
    </Card>
  );
}

Form.propTypes = {
  onSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
