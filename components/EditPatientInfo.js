import * as axios from "axios";
import  Router  from "next/router";
import { useState } from "react";
import { Offcanvas, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSession, delSession } from "../redux/actions/sessionActions";


const EditPatientInfo = (props) => {
  // console.log(props.email);
  const data = props.data;


  const [age, setAge] = useState(data.age);
  const [mobile, setMobile] = useState(data.mobile);
  const [height, setHeight] = useState(data.height);
  const [weight, setweight] = useState(data.weight);
  const [blood_group, setblood_group] = useState(data.blood_group);
  const [Address, setAddress] = useState(data.Address);
  const [Address1, setAddress1] = useState(data.Address1);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [zip, setZip] = useState(data.zip);

  const dispatch = useDispatch();



  const sendMessage = async (e) => {
    e.preventDefault();

    const postData = {
      email: data.email,
      age: age,
      mobile: mobile,
      Address: Address,
      Address1: Address1,
      city: city,
      state: state,
      zip: zip,
      blood_group: blood_group,
      height: height,
      weight: weight,
    };

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

    savePost(postData);

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
        dispatch(getSession({...res.data, isPatient: true, isDoctor: false}));
        Router.push("/patients");
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
              <Form.Control type="number" placeholder="Enter Age" defaultValue={data.age} onChange={(e) => setAge(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" defaultValue={data.mobile} onChange={(e) => setMobile(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" defaultValue={data.Address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address 1</Form.Label>
              <Form.Control type="text" placeholder="Enter Address 1" defaultValue={data.Address1} onChange={(e) => setAddress1(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" defaultValue={data.city} onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter State" defaultValue={data.state} onChange={(e) => setState(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Enter zip" defaultValue={data.zip} onChange={(e) => setZip(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control type="text" placeholder="Enter Blood Group" defaultValue={data.blood_group} onChange={(e) => setblood_group(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Height</Form.Label>
              <Form.Control type="text" placeholder="Enter Height" defaultValue={data.height} onChange={(e) => setHeight(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Weight</Form.Label>
              <Form.Control type="text" placeholder="Enter Weight" defaultValue={data.weight} onChange={(e) => setweight(e.target.value)} />
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
