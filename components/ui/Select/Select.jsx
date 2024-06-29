import React from "react";
import classes from "./Select.module.css";

const Select = () => {
  return (
    <select className={classes.select} name='select'>
      <option hidden selected>
        Пол
      </option>
      <option className={classes.option} value='value1'>
        Men
      </option>
      <option value='value2'> Women</option>
    </select>
  );
};

export default Select;
