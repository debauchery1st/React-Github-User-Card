import React from "react";
import Card from "./Card";
import Cards from "./Cards";
// import axios from "axios";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      url: `https://api.github.com/users/${this.props.data.login}/followers`
    };
    console.log("Table constructed");
  }
  componentDidMount() {
    console.log("Table did mount");
    console.log(this.props);
  }
  render() {
    return (
      <React.Fragment>
        <section className="Lead-Git-r">
          <Card hacker={this.props.data} />
        </section>
        <Cards loadURL={this.state.url} />
      </React.Fragment>
    );
  }
}

export default Table;
