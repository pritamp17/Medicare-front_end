import styled from "styled-components";
import Login from "../components/Login";
import HomePage from "../components/HomePage";
import { useSelector } from "react-redux";
import Doctor from "./doctors";
import PatientDashboard from "./patients";
import Router from "next/router";

export default function Home() {
  const session = useSelector((state) => state);
  const user = session.data.login;
  
  console.log(user);
  if (user) {
    if (user.isDoctor === true) {
      Router.push("/doctors");
      return <h4>Redirecting you to doctor's page</h4>;
    } else if (user.isPatient === true) {
      Router.push("/patients");
      return <h4>Redirecting you to patient's page</h4>;
    }
  } else return <HomePage />;
}

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 55px;
`;
