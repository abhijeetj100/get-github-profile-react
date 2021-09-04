// import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";

// import App from "./App";
import GetUserProfile, { HeaderComponent } from "./GetUserProfile";

// function ComponentOne() {
//   const [state, setState] = useState("false");
//   const [state2, setState2] = useState("am i reset?");
//   // useEffect(() => {
//   //   console.log("ComponentOne re-rendered!!! 1");
//   // });
//   console.log("ComponentOne re-rendered!!! (1)", state);

//   return (
//     <>
//       <h1>
//         {" "}
//         From Component_one:- {state} {state2}
//       </h1>
//       <button onClick={() => setState("true")}>Change state</button>
//       <button onClick={() => setState2("value has been reset")}>
//         Change reset status
//       </button>
//     </>
//   );
// }

// function ComponentTwo() {
//   // const [state, setState] = useState("false");
//   useEffect(() => {
//     // console.log("ComponentTwo re-rendered!!! 2");
//   });
//   // console.log("ComponentTwo re-rendered!!! (2)");

//   return (
//     <>
//       <h1> From Component_two</h1>
//       {/* <button onClick={() => setState("true")}>Change state</button> */}
//     </>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    {/* <App /> */}
    {/* <ComponentOne />
    <ComponentTwo /> */}
    <HeaderComponent title="GitHub Profile" className="title_class" />
    <GetUserProfile />
  </>,
  rootElement
);
