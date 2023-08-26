import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count1: 100,
    };
    console.log(this.props.name+"Child Constructor is called");
  }
  componentDidMount(){
    console.log(this.props.name+"Child Component did Mount");
  }
  render() {
    console.log(this.props.name+"Child Render is called");
    return (
      <div className="user">
        <h1>Count:{this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 - 1,
            })
          }
        >
          Increment Button
        </button>
        <h1>Count1:{this.state.count1}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Kanpur</h3>
        <h4>Contact: @ashutoshjhacodes</h4>
      </div>
    );
  };
};
export default UserClass;
