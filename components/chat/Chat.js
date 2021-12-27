import React, { useEffect, useState } from 'react'
import Message from './Message';
import { useSelector } from 'react-redux';
import db from "./firebase"
import firebase from "firebase"
import { useRouter } from 'next/router';
import * as axios from "axios";
import { Button } from 'react-bootstrap';

function Chat({doc_email,pat_email}) {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([]);
    const session = useSelector((state) => state);
    const [doc_emaile, setDoc_email] = useState('')
    const [doc, setDoc] = useState({}) 
    
//     console.log("in charjs compo");
//    console.log(doc.email);
//    console.log(pat_email);
   const router = useRouter();
    // let pat_email;
    useEffect (() => {
        
        const doc_id = router.query.id;
         axios.get(`http://localhost:9000/doctor/${doc_id}`).then((response) => {
            console.log(response.data.email);
           if(response.data.email) {setDoc(response.data)}
          });

          db.collection('messages').doc('pritampawar526@gmail.com').collection('pritampawar625@gmail.com').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
              setMessages(snapshot.docs.map(doc => doc.data()))
          })

    }, [])
    
  

    //  useEffect(() => {
    //     setPat_data(session.data.login); 
    //         db.collection('messages').doc(`${session.data.login.isPatient?doc_email:session.data.login.email}`).collection(`${session.data.login.isPatient?session.data.login.email:doc_email}`).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    //             setMessages(snapshot.docs.map(doc => doc.data()))
    //         })
        
           
    // }, [])
    

    const sendMessages=e=>{
        e.preventDefault();
        db.collection('messages').doc('pritampawar526@gmail.com').collection('pritampawar625@gmail.com').
        add({
            message:input,
             user: session.data.login.name,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }
    console.log(messages);
    // console.log(pat_data._id)

    const formInput = {
        padding: '15px',
        background: 'transparent',
        border: 'none',
        width: '100%',
        outlineWidth: '0px',
        color: "white",
        fontSize: 'large'
      };

      const chat_1 = {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        backgroundColor: 'white',
        // overflow: 'scroll'
        // overflow: 'auto',
        // height: '100%'
        maxHeight: '90vh',
        overflow: 'auto'
      }

      const chat__messages_p = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '20px',
        color: 'black',
        // -ms-overflow-style: 'none',
         scrollbarWidth: 'none',
      }

      const chat__messages_d = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '20px',
        color: 'black',
        // -ms-overflow-style: 'none',
         scrollbarWidth: 'none',
      }

      const chat__input = {
        color: 'lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px',
        borderTop: '1px solid gray',
        backgroundColor: '#FF1700',
        position: '-webkit-sticky', /* Safari */
        position: 'sticky',
        bottom: '0'
      }

    return (
        <div style={chat_1}>
            <div style={session.data.login.isPatient ? chat__messages_p : chat__messages_d}>
               {messages.map((message)=>(
                   <Message
                   
                    message={message.message}
                    user={message.user}
                    timestamp={message.timestamp}
                    
                   />
               ))}
            </div>  

            <div style={chat__input}>

                    <form action="">
                        <input value={input} 
                        style={formInput}
                        // disabled={!channelId}
                        onChange={e=> setInput(e.target.value)} 
                        placeholder={'Message'}/>
                        <Button type="submit"
                        style={{display:'none'}}
                        onClick={sendMessages}
                         >
                        Send Message</Button>
                    </form>
            </div>
        </div>
    )
}

export default Chat




 



