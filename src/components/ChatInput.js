import React, { useState } from 'react';
import './ChatInput.css';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';
import SendIcon from "@material-ui/icons/Send";

function ChatInput({channelName, channelId}) {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId){
            db
              .collection("rooms")
              .doc(channelId)
              .collection("messages")
              .add({
                  message: input,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  user: user.displayName,
                  userimage: user.photoURL,
              })
            
              setInput("")
        }
    }

    return (
        <div className="chatInput">
            <form>
                <div className="chatInput__wrapper">
                    <input 
                        
                        value={input}
                        placeholder={`Message #${channelName?.toLowerCase()}`}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button disabled={!input} type="submit" onClick={sendMessage}>
                    <SendIcon />
                </button>
                
            </form>
        </div>
    )
}

export default ChatInput;
