import { useState } from "react";
import { Card, Col, FloatingLabel, Form, Row, Button, Container } from "react-bootstrap";
import Router from 'next/router'
import styled from "styled-components";
import Header from "../../components/Header";
import axios from '../api/BaseApi'
function signUp() {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Name, setName] = useState('')
  const [mobile, setMobile] = useState()
  const [workexp, setWorkExp] = useState('')
  const [Specialization, setSpecialization] = useState('')
  const [proof, setProof] = useState('')
  const [adress, setAdress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState()
  const [Gender, setGender] = useState('') 
  const [photo, setPhoto] = useState('')

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setProof(e.target.files[0])
    }
}

    const sendMessage = async (e) => {
        e.preventDefault();

        // if (proof) {
        //   const imgForm = new FormData()
        //   imgForm.append('file', image, image.name)

        //   await axios.post('/upload/image', imgForm,{
        //       headers: {
        //           'accept': 'applications/json',
        //           'Accept-Language': 'en-US,en;q=0.8',
        //           'Content-Type':'multipart/form-data; boundary=${imgForm._boundary}',
        //       }
          // }).then((res) => {

          //   await axios.post('http://localhost:9000/signup/doctor',{
              // email: Email ,
              // password: Password,
              // name: Name,
              // gender: Gender,
              // address: adress,
              // city: city,
              // state: state,
              // zip: zip,
              // specialisation: Specialization,
              // work_experience: workexp, 
              // proof_of_experience: "",
              // profile_pic: "",
              // mobile: mobile
  
          // });
            
          // })
         
          const postData = {
            email: Email ,
            password: Password,
            name: Name,
            gender: Gender,
            address: adress,
            city: city,
            state: state,
            zip: zip,
            specialisation: Specialization,
            work_experience: workexp, 
            proof_of_experience: "",
            profile_pic:  "https://imgur.com/72E2gze",
            mobile: mobile
          }
          console.log(postData);
          savePost(postData)


        setEmail('');
        setPassword('');
        setName('');
        setMobile();
        setWorkExp('')
        setSpecialization('')
        setProof('')
        setAdress('')
        setCity('')
        setState('')
        setZip()
        setGender('')
        setPhoto('')
    }


    const savePost = async (postData)=> {
      await axios.post('http://localhost:9000/signup/doctor', postData,{ headers: {
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
      if(pathname == '/doctors/signUp' ){
         Router.push('/doctors')
      }
    };

  return (
    <>
      <Header id="1" />
      <wrapper>
        <Container className="border border-danger border-4">
          <Form className="my-5">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label >Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row classname="mb-3">
              <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="mobile" placeholder="Mobile Number" onChange={e => setMobile(e.target.value)}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label> Work Experience </Form.Label>
                <Form.Control type="email" placeholder="Work Experience" onChange={e => setWorkExp(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Specialization</Form.Label>
                <Form.Control type="password" placeholder="Specialization" onChange={e => setSpecialization(e.target.value)}/>
              </Form.Group>
            </Row>

            {/* <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Please Upload proof of Specialization </Form.Label>
              <Form.Control type="file" size="sm" onChange={e => setProof(e.target.value)} />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St"  onChange={e => setAdress(e.target.value)}/>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={e => setCity(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                {/* <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select> */}
                <Form.Control onChange={e => setState(e.target.value)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={e => setZip(e.target.value)}/>
              </Form.Group>
            </Row>

            <FloatingLabel controlId="floatingSelect" label="Gender" className="mb-3">
              <Form.Select aria-label="Floating label select example" onChange={e => setGender(e.target.value)}>
                {/* <option>Gender</option> */}
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Gender Neutral</option>
              </Form.Select>
            </FloatingLabel>

            {/* <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Choose Profile Photo</Form.Label>
              <Form.Control type="file" size="sm" onChange={handleChange} />
            </Form.Group> */}
          </Form>
          <Button variant="primary" type="submit" className="md-3" onClick={sendMessage}>
            Sign Me Up
          </Button>
        </Container>
      </wrapper>
    </>
  );
}

export default signUp;

const wrapper = styled.section`
  /* width: 100px; */
  /* display: flex;
 flex: 1; */
  /* flex-direction: row; */
  justify-content: center;
  margin-top: 55px;
`;
