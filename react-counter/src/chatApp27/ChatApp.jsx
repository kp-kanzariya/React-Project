import React, { useEffect, useState } from 'react'
import { createConnection } from './CreateConnection'

function ChatApp({roomID}) {

    // http://localhost:3000/
    const [server, setServer] = useState('http://localhost:1234/')

    
useEffect(()=>{
    
    const connection = createConnection(roomID,server);
    connection.connect();

    return ()=>{
        connection.disconnect();
    }
})
    return (
        <div>
            {server}
            <h2>{roomID}</h2>
        </div>
    )
}

function Chat() {
    const [room, setRoom] = useState("General")
    return (
        <>
            <select onChange={
                (e) => { setRoom(e.target.value) }
            }>
                <option>General</option>
                <option>Music</option>
                <option>Travel</option>
            </select>
            <h2>{room}</h2>
            <ChatApp roomID={room}/>
        </>
    )
}

export default Chat;