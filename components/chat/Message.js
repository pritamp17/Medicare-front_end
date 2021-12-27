import styled from "styled-components";
import React from 'react'
function Message( {timestamp, user, message}) {
    return (
        <Message1>
            {/* <Avatar src={user.photo}/> */}
            <Message__info>
                <h4>{user}
                <Message__timestamp>
                    {new Date(timestamp?.toDate()).toUTCString()}
                </Message__timestamp>
                </h4>
                <p>{message}</p>
            </Message__info>
            
           
        </Message1> 
    )
}
 
export default Message

const Message1 = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    color: black;
    
`;
const Message__info = styled.div`
    margin-left: 20px;
`;

const Message__timestamp = styled.div`
    color: gray;
    margin-left: 20px;
    font-size: x-small;
`;