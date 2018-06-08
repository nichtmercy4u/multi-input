import React from "react";
import { Grid, Button } from "@material-ui/core";

const TitleComponent = props => (
  <Grid container className={"footer"}>
    <Grid item xs={12}>
      <Button color="default" onClick={props.onCancel}>
        Cancel
      </Button>
      <Button color="primary" onClick={props.onSave}>
        Save
      </Button>
    </Grid>
  </Grid>
);

export default TitleComponent;
