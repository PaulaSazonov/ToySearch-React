import React, { Component } from "react";

class Checkbox extends Component {
  state = {
    isChecked: false
  };

  /**
   * changes checkbox's state when user toggles the box, handleCheckboxChange refers to CheckboxFilter's
   * function toggleCheckbox
   */
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />

        {label}
      </label>
    );
  }
}

export default Checkbox;
