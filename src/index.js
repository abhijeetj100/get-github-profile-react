// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {useState, useEffect} from 'react';
// import "./styles.css";

// import App from "./App";
import GetUserProfile, { HeaderComponent } from "./GetUserProfile";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  console.log("EXAMPLE COMPONENT RENDERED");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("CALLED DURING FIRST RENDER", count, count2);;
    document.title = `You clicked ${count2} times`;
    return () =>{
      console.log("DESTRRUCTURING?", count, count2);
    }
  }, [count, count2]);

  return (
    <div>
      <p>You clicked {count2} times</p>
      <button onClick={() => {setCount2(count2+1); setCount(count+1)}}>
        Click me
      </button>
    </div>
  );
}

//CUSTOM HOOK
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    {/* <App /> */}
    {/* <ComponentOne />
    <ComponentTwo /> */}
    <HeaderComponent title="GitHub Profile" className="title_class" />
    <GetUserProfile />
    <Example />
  </>,
  rootElement
);
