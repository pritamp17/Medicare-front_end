 import React, { useState, useEffect } from 'react'
 import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import Header from "../../components/Header";
import Chat from '../../components/chat/Chat';
import * as axios from "axios";

 function fun() { 
    const session = useSelector((state) => state);
    const [pat_data, setPat_data] = useState({})
    const router = useRouter();
    const [doc_email, setDoc_email] = useState()
    let pat_email;
    useEffect (async () => {
        const doc_id = router.query.id;
        setPat_data(session.data.login); 
        await axios.get(`http://localhost:9000/doctor/${doc_id}`).then((response) => {
            console.log(response);
           if(response.data.email) {setDoc_email(response.data.email)}
          });
          if(pat_data.email) {pat_email=pat_data.email}

    }, [])
    
    console.log("in id compo"); 
    // console.log(messages); 
    // console.log(doc_email);
    // console.log(pat_data.email);
    
    // console.log(pat_data);
     return ( 
         <div style={{height:'100vh'}}>
          <Header id="5" s />
             {/* {doc_id}
             <h1>hiii</h1>
              {pat_data._id}  */}
              <div style={{height:'100vh'}}>
              <Chat doc_email={doc_email} pat_email={pat_data.email}/>
              </div>
             
         </div>
     )
 }
 
 export default fun
 