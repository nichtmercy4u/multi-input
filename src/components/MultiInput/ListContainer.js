import React, { Component } from "react";
import PropTypes from "prop-types";
// Theme
import { Grid } from "@material-ui/core";
import "./ListContainer.css";
//Components
import TitleComponent from "./Components/TitleComponent";
import ListComponent from "./Components/ListComponent";
import FooterComponent from "./Components/FooterComponent";

class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [""]
    };
  }

  onInputChange = (i, v) => {
    const { list } = this.state;
    const lastIndex = list.length - 1;
    list[i] = v;
    if (i === lastIndex) {
      list.push("");
    }
    this.setState({ list });
  };

  deleteItem = index => {
    const { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
  };

  onSave = () => {
    const { list } = this.state;
    const array = [];
    list.map((v, i) => {
      if (list.length - 1 > i) {
        array.push(v);
      }
      return true;
    });
    return alert(`Multi Input\n ${array}\n :)`);
  };
  onCancel = () => {
    this.setState({ list: [""] });
  };

  render() {
    const { list } = this.state;
    return (
      <Grid container spacing={24}>
        <TitleComponent />
        <ListComponent
          list={list}
          onInputChange={this.onInputChange}
          deleteItem={this.deleteItem}
        />
        <FooterComponent onSave={this.onSave} onCancel={this.onCancel} />
      </Grid>
    );
  }
}

export default ListContainer;

ListContainer.propTypes = {
  name: PropTypes.array
};
