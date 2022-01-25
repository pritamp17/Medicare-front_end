import React from "react";
import Router from "next/router";
import { useState } from "react";
import { Offcanvas, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSession, delSession } from "../redux/actions/sessionActions";
import FileBase64 from "react-file-base64";
import axios from "axios";

const EditDoctorInfo = (props) => {
  // console.log(props.email);
  const data = props.data;

  const [intro, setIntro] = useState(data.intro);
  const [mobile, setMobile] = useState(data.mobile);
  const [address, setAddress] = useState(data.address);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [zip, setZip] = useState(data.zip);
  const [photo, setPhoto] = useState(data.profile_pic);
  const dispatch = useDispatch();

  const sendMessage = async (e) => {
    e.preventDefault();

    const postData = {
      email: data.email,
      mobile: mobile,
      address: address,
      city: city,
      state: state,
      zip: zip,
      intro: intro,
      profile_pic: photo,
    };

    setMobile(mobile);
    setAddress(address);
    setCity(city);
    setState(state);
    setZip(zip);
    setIntro(intro);
    setPhoto(photo);

    savePost(postData);
  };
  const savePost = async (postData) => {
    await axios
      .post("http://localhost:9000/doctor/update", postData, {
        headers: {
          accept: "applications/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(getSession({ ...res.data, isPatient: false, isDoctor: true }));
        props.handleClose();
        Router.push("/doctors");
      });
  };

  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center">Edit your profile info</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adress</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" defaultValue={data.address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter City" defaultValue={data.city} onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" defaultValue={data.state} onChange={(e) => setState(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Enter zip" defaultValue={data.zip} onChange={(e) => setZip(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>mobile</Form.Label>
              <Form.Control type="mobile" placeholder="Enter mobile" defaultValue={data.mobile} onChange={(e) => setMobile(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quick intro</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Give a quick intro" defaultValue={data.intro} onChange={(e) => setIntro(e.target.value)} />
            </Form.Group>
            <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPhoto(base64)} />
            <Button variant="primary" type="submit" onClick={sendMessage}>
              Submit
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default EditDoctorInfo;
