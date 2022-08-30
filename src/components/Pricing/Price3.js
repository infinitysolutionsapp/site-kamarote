import React from "react";
import _data from "../../data";

class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {}
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      price: _data.price
    });
  }
  render() {
    return (
      <React.Fragment>
  
      </React.Fragment>
    );
  }
}

export default Pricing;
