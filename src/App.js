// import React, { Component } from "react";
// import "./App.css";
// import Filter from "./Filter";

// export class App extends Component {
//   state = {
//     names: [
//       "Abhay",
//       "Ajay",
//       "Axay",
//       "Bhanu",
//       "Bhavya",
//       "Bhaskar",
//       "cinu",
//       "cse",
//       "cbe",
//     ],
//   };

//   onChangeHandler = (e) => {
//     // this.setState({ text: "" });
//     console.log(e.target.value);
//   };
//   render() {
//     return (
//       <div>
//         <h1>My Contacts</h1>
//         <input
//           type="text"
//           onChange={this.onChangeHandler}
//           // value={this.state.names}
//         />
//         <div>
//           {this.state.names.map((person) => (
//             <li>
//               <span>{person}</span>
//             </li>
//           ))}
//         </div>
//         <Filter />
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import Filter from "./Filter";

export default function App() {
  return (
    <div>
      <Filter />
    </div>
  );
}
