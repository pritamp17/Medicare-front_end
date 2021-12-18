import React from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "../components/Header";
// import Login from "../../components/Login";
// import "./style.css";


function login() {
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
            <input
              type="email"
              id="username"
              name="username"
              className="text_input"
              placeholder="enter your email id"
            />
          </div>
          <div className="text_area my-2">
            <input
              type="password"
              id="password"
              name="password"
              className="text_input"
              placeholder="enter your password"
            />
          </div>
          <button type="button my-4" className="btn btn-primary" type="submit">
            SIGN IN
          </button>
        </form>        
        <a className="btn" href="/signup"></a>
        </div>

     </div>  
     <div class=" col-sm-6"> 
     <div className="login">
        <h4>Patient Login</h4>
        <form>
          <div className="text_area">
            <input
              type="email"
              id="username"
              name="username"
              placeholder="your email id"
              className="text_input"

            />
          </div>
          <div className="text_area my-2">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="enter your password"
              className="text_input"

            />
          </div>
          <button type="button my-4" className="btn btn-primary" type="submit">
            SIGN IN
          </button>
        </form>
        <a className="btn" href="/signup"></a>
        </div>

     </div>  
    </div>
    </div>
      </>
    )};

export default login;

const wrapper = styled.section

