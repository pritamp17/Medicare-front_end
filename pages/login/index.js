import React, { useState } from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../../components/Header";
import * as axios from 'axios';
import Router from 'next/router'
// import Login from "../../components/Login";
// import "./style.css";

function login() {
  
  const [docEmail, setDocEmail] = useState("") 
  const [docPass, setDocPass] = useState("")
  const [patEmail, setPatEmail] = useState("")
  const [patPass, setPatPass] = useState("")


  // //////////////// doc 
  const DocFun = async (e) => {
    e.preventDefault();   
  
    const postData = {
      email: docEmail ,
      password: docPass,
    }
    console.log(postData);
    saveDocPost(postData)   
    setDocEmail('');
    setDocPass('');
  }

 

  const saveDocPost = async (postData)=> {
    await axios.post('http://localhost:9000/login/doctor', postData,{ headers: {
      'accept': 'applications/json',
       'Accept-Language': 'en-US,en;q=0.8',
       "Access-Control-Allow-Origin": "http://localhost:3000"
    }})
    .then((res)=> {
        console.log(res);
        componentDidMount();
    })
  
  }
  
  const componentDidMount = () => {
    const {pathname} = Router
    if(pathname == '/login' ){
       Router.push('/doctors') 
    }
  };

// ///////////////////////////////////////////// pat

  const PatFun = async (e) => {
    e.preventDefault();   
  
    const postData = {
      email: patEmail ,
      password: patPass,
    }
    console.log(postData);
    savePatPost(postData)   
    setPatEmail('');
    setPatPass('');
  }

  const savePatPost = async (postData)=> {
    await axios.post('http://localhost:9000/login/patient', postData,{ headers: {
      'accept': 'applications/json',
       'Accept-Language': 'en-US,en;q=0.8',
       "Access-Control-Allow-Origin": "http://localhost:3000"
    }})
    .then((res)=> {
        console.log(res);
        componentDidMountP();
    })
  
  }
  
  const componentDidMountP = () => {
    const {pathname} = Router
    if(pathname == '/login' ){
       Router.push('/patients') 
    }
  };

  return (

    <>
      <Header id="2" />
      <div class="container my-4 ">
        <div class="row">
          <div class=" col-sm-6">
            <div className="login" border-style="solid">
              <h4>Doctor Login</h4>
              <form>
                <div className="text_area">
                  <input type="email" id="username" name="username" className="text_input" placeholder="enter your email id" onChange={e => setDocEmail(e.target.value)}/>
                </div>
                <div className="text_area my-2">
                  <input type="password" id="password" name="password" className="text_input" placeholder="enter your password" onChange={e => setDocPass(e.target.value)}/>
                </div>
                <button type="button my-4" className="btn btn-primary" type="submit" onClick={DocFun}>
                  SIGN IN
                </button>
              </form>
              <a className="btn" href="/signup"></a>
            </div>
          </div>
          <div class=" col-sm-6">
            <div className="login" >
              <h4>Patient Login</h4>
              <form>
                <div className="text_area">
                  <input type="email" id="username" name="username" placeholder="your email id" className="text_input" onChange={e => setPatEmail(e.target.value)}/>
                </div>
                <div className="text_area my-2">
                  <input type="password" id="password" name="password" placeholder="enter your password" className="text_input" onChange={e => setPatPass(e.target.value)}/>
                </div>
                <button type="button my-4" className="btn btn-primary" type="submit" onClick={PatFun}>
                  SIGN IN
                </button>
              </form>
              <a className="btn" href="/signup"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;

const wrapper = styled.section;
