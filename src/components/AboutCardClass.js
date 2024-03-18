import React from "react";
import InnerChildComponent from "./InnerChildComponent";

class AboutCardClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
      count2: 10,
    };

    // console.log(props.name + "constructor");
  }

  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    // console.log(name + "render");
    return (
      <div>
        <button
          onClick={() => {
            // This is how we can update the state variables
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <div className="aboutCard">
          <h2>Name: {name}</h2>
          <h2>count: {count}</h2>
          <h2>Location: Gnadhinagar</h2>
        </div>

        <InnerChildComponent name={name} />
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props.name + "didcompoent mount");
  }
}

export default AboutCardClass;
