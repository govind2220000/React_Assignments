import React from "react";
import UserContext from "../utils/UserContext.js";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.state.userInfo.name + " Constructor Called");
  }
  render() {
    //const { name, location, contact } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    //console.log(this.props.name + " Child Render Called");
    console.log(name + " Child Render Called");
    return (
      //Using Context variable in class based components using .Consumer
      <UserContext.Consumer>
        {({ loggedInUser }) => (
          <div className="user-card">
            {/* <h1>Count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              //We can do multiple state variable updates
            });
          }}
        >
          Increase Count
        </button>
        <h1>Count2:{this.state.count2}</h1> */}
            <img src={avatar_url} alt={name} width="200" height="200"></img>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            {/* <h3>Contact:{contact}</h3> */}
            <h3>User:{loggedInUser}</h3>
          </div>
        )}
      </UserContext.Consumer>
    );
  }

  async componentDidMount() {
    //this works simlar to useEffect it runs after everthing in component is done like first constructor then render then componentDidMount.
    console.log(this.state.userInfo.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/govind2220000");
    const json = await data.json();
    console.log(this.state.userInfo.location);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
}

export default UserClass;
/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */
