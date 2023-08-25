import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Kanpur</h3>
        <h4>Contact: @ashutoshjhacodes</h4>
      </div>
    );
  }
}
export default UserClass;
