import React from "react";
import UserFunction from "./UserFunction.js";
import UserClass from "./UserClass.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        {/* <UserFunction
          name={"Govind(Function)"}
          location={"Mumbai"}
          contact={"@govind222000"}
        ></UserFunction>
        <UserClass
          name={"Govind1(Class)"}
          location={"Mumbai1"}
          contact={"@govind222000"}
        ></UserClass>
        <UserClass
          name={"Govind2(Class)"}
          location={"Mumbai2"}
          contact={"@govind222000"}
        ></UserClass> */}
        <UserClass></UserClass>
        <UserClass></UserClass>
      </div>
    );
  }
  //When we have multiple child components then the cosntructor and render is completed first and then ComponentDidMount is being called in batch for all the child. Refer https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  componentDidMount() {
    console.log("Parent Did Mount");
  }
}
// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=
*/
// const About = () => {
//   return (
//     <div className="About">
//       <UserFunction
//         name={"Govind(Function)"}
//         location={"Mumbai"}
//         contact={"@govind222000"}
//       ></UserFunction>
//       <UserClass
//         name={"Govind(Class)"}
//         location={"Mumbai"}
//         contact={"@govind222000"}
//       ></UserClass>
//     </div>
//   );
// };

export default About;
