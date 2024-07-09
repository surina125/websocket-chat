import "./App.css";
import InputField from "./components/InputField/InputField";
import socket from "./server"
import { useEffect, useState } from 'react'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    socket.on('message', (message) => {
      console.log("message", message)
    })
    askUserName()
  }, [])

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요")
    console.log("uuu", userName)

    socket.emit("login", userName, (res) => {
      if (res?.ok) {
        setUser(res.data)
      }
    })
  }
  const sendMessage = (event) => {
    event.preventDefault()
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage res", res)
    })
  }
  return (
    <div>
      <div className="App"></div>

      <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  );
}

export default App;
