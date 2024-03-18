import AboutCard from "./AboutCard";
import AboutCardClass from "./AboutCardClass";
import React from "react";
// const About = () => {
// return (
//   <div>
//     <AboutCard />
//     <AboutCardClass name={"Apurv Patel - Props"} />
//   </div>
// );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");

    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    console.log("parent didcompoent mount");
    const apiData = await fetch("https://api.github.com/users/apurv005");
    const data = await apiData.json();
    this.setState({
      user: data,
    });
  }

  componentDidUpdate() {
    console.log("Coponent did update");
  }

  componentWillUnmount() {
    //  when component will be vanished then it will be unmounted..
    console.log("Component will unmount");
  }

  render() {
    if (!this.state.user) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <AboutCard />
        <AboutCardClass
          name={
            this.state.user.name + " " + this.state.user.location + "- Props"
          }
        />
        <AboutCardClass name={"Dhwani Patel - Props"} />
        <AboutCardClass name={"Tanisha Patel - Props"} />
      </div>
    );
  }
}

export default About;
