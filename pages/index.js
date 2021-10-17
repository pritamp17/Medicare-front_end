import styled from 'styled-components';
import Login from '../components/Login';

export default function Home() {
  return (
    <>
    <Wrapper>
    <Login type="Patient" signUpLink='patients/signUp' />
    <Login type="Doctor" signUpLink='doctors/signUp'/>
  </Wrapper>
    </>
  )
}




// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
 display: flex;
 flex: 1;
 flex-direction: row;
 justify-content: space-evenly;
 padding-top:55px;
 
`;