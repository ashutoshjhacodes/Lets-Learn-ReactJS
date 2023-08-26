import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count: 0,
      count1: 100,
      userInfo: {
        username: " Ashu",
        location: "Default",
        avatar: "http://dummy.com",
      },
    };
    // console.log(this.props.name+"Child Constructor is called");
  }
  async componentDidMount() {
    console.log("Child Component did Mount");
    const data = await fetch("https://api.github.com/users/ashutoshjhacodes");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(){
    console.log("component did update");
  }
  componentWillUnmount(){
    console.log("Component will unmount")
  }
  render() {
    // console.log(`${this.props.name}Child Render is called`);
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
        <div>
          <img src={this.state.userInfo.avatar_url}></img>
          <h1>Name:{this.state.userInfo.name}</h1>
          <h2>Location: {this.state.userInfo.location}</h2>
        </div>
      </div>
    );
  }
}
export default UserClass;
