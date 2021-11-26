import "./App.css";
import Home from "./pages/Home";
import { RecoilRoot } from 'recoil';
import SockJsClient from 'react-stomp';
import { useState } from "react";

const SOCKET_URL = 'http://localhost:8090/chef-socket';

function App() {
  const [message, setMessage] = useState('You server message here.');
  let onConnected = () => {
    console.log("Connected!!")
  }

  let onMessageReceived = (msg) => {
    setMessage(msg.message);
  }

  return (
    <div className="App">
    <RecoilRoot>
    <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message']}
        onConnect={onConnected}
        onDisconnect={console.log("Disconnected!")}
        onMessage={msg => onMessageReceived(msg)}
        debug={false}
      />
      <Home />
    </RecoilRoot>
    </div>
    
  );
}

export default App;
