import * as axios from "axios";
import { useState } from "react";
import { Offcanvas, Form, Button } from "react-bootstrap";

const EditPatientInfo = (props) => {
  // console.log(props.email);

  const [age, setAge] = useState();
  const [mobile, setMobile] = useState();
  const [height, setHeight] = useState("");
  const [weight, setweight] = useState("");
  const [blood_group, setblood_group] = useState();
  const [Address, setAddress] = useState("");
  const [Address1, setAddress1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();

    const postData = {
      email: props.email,
      age: age,
      mobile: mobile,
      Address: Address,
      Address1: Address1,
      city: city,
      state: state,
      zip: zip,
      blood_group:blood_group,
      height:height,
      weight:weight
    };
    console.log(postData);
     savePost(postData);
  
    savePost(postData);
    setMobile(mobile);
    setAge(age);
    setAddress(Address);
    setAddress1(Address1);
    setCity(city);
    setState(state);
    setZip(zip);
    setHeight(height);
    setweight(weight);
    setblood_group(blood_group);
  };
  const savePost = async (postData) => {
    await axios
      .put("http://localhost:9000/signup/patient/update", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  return ( 
    <> 
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center">Edit your profile info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" onChange={(e) => setMobile(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address 1</Form.Label>
              <Form.Control type="text" placeholder="Enter Address 1" onChange={(e) => setAddress1(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City"  onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter State" nChange={(e) => setState(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Enter zip" onChange={(e) => setZip(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control type="text" placeholder="Enter Blood Group" onChange={(e) => setblood_group(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Height</Form.Label>
              <Form.Control type="text" placeholder="Enter Height" onChange={(e) => setHeight(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Weight</Form.Label>
              <Form.Control type="text" placeholder="Enter Weight" onChange={(e) => setweight(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={sendMessage}>
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default EditPatientInfo;
