import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor is Called");
  }
  componentDidMount(){
    console.log("Parent Component Did Mount");
  }
  render(){
    console.log("Parent Component Rendered");
    return (
      <div>
        <h1>About Us</h1>
        <h4>We are food delivering website</h4>
        <UserClass name={"A J (CLASS)"} />
        <UserClass name={"ELON MUSK"} />
        <UserClass name={"Vishal"}/>
      </div>
    );
  }
}
export default About;
