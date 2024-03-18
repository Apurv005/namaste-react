import { Component } from "react";
class InnerChildComponent extends Component {
  constructor(props) {
    super(props);
    // console.log(props.name + "Inner-Child-Constructor");
  }
  render() {
    // console.log(this.props.name + "Inner-Child-Render");
  }
  componentDidMount() {
    // console.log(this.props.name + "Inner-Child-ComponentMount");
  }
}

export default InnerChildComponent;
