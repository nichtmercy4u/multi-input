import React from "react";
import { Close } from "@material-ui/icons";
import { Grid } from "@material-ui/core";

import ItemComponent from "./ItemComponent";

const ListComponent = ({ list, onInputChange, deleteItem }) => (
  <Grid item md={8} xs={12}>
    {list.map((v, i) => (
      <Grid container key={i}>
        <Grid item xs={10}>
          <ItemComponent value={v} index={i} onChange={onInputChange} />
        </Grid>
        {list.length - 1 > i ? (
          <Grid item xs={2}>
            <Close onClick={() => deleteItem(i)} className={"close"} />
          </Grid>
        ) : null}
      </Grid>
    ))}
  </Grid>
);

export default ListComponent;
