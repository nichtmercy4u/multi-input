import React from "react";
import { TextField } from "@material-ui/core";

const ItemComponent = ({ index, value, onChange }) => (
  <TextField
    fullWidth
    id="inedx"
    value={value}
    label={`#${index + 1} text`}
    type="text"
    onChange={e => onChange(index, e.target.value)}
    margin="normal"
  />
);

export default ItemComponent;
