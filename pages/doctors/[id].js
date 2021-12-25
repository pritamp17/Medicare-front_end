import Header from "../../components/Header";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import React from "react";
import { useEffect } from "react";
import * as axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

function home() {
  const [data, setData] = useState({});
  const [oppointment, setOppointment] = useState([]);
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  useEffect(() => {
    if (!router.isReady) return;
    console.log(router.query.id);
    axios.get(`http://localhost:9000/doctor/${id}`).then((response) => {
      console.log(response.data);
      setData(response.data);
      //  console.log(object.appointments);
      //setOppointment(object.appointments)
      // console.log(oppointment);
    });
  }, [router.isReady]);

  return (
    <>
      <Header id="5" />
      <Container className="shadow p-3 mb-5 my-4 bg-body rounded">
        <Row>
          <Col>
            <img src="/doctor.jpg" alt="Dp" />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Header>{data.name}</Card.Header>
                <Card.Title className="my-2">{data.specialisation}</Card.Title>
                <Card.Text>
                  <p>
                    <ul>
                      <li>specialisation</li>
                    </ul>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <p>
              <h4 align="center">Brief Statistics</h4>
              <h5 align="center"> Treated approx 100 patients </h5>
            </p>
            <br />
            <p>
              <h4 align="center"> Rating</h4>
              <h2 align="center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  {" "}
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  {" "}
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  {" "}
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </h2>
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col>
            <Button variant="primary" size="lg">
              <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                {" "}
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
              </svg>
              Book Appointment
            </Button>
          </Col>
          <Col>
            <Button variant="primary" size="lg">
              Directions
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container className="my-4 p-3 shadow  bg-body rounded">
        <p>
          <h4 align="let">Brief Profile</h4>
          In 2014, my email list expanded to over one hundred thousand subscribers, which made it one of the fastest-growing newsletters on the internet. I had
          felt like an impostor when I began writing two years earlier, but now I was becoming known as an expert on habits—a new label that excited me but also
          felt uncomfortable. I had never considered myself a master of the topic, but rather someone who was experimenting alongside my readers. In 2015, I
          reached two hundred thousand email subscribers and signed a book deal with Penguin Random House to begin writing the book you are reading now. As my
          audience grew, so did my business opportunities. I was increasingly asked to speak at top companies about the science of habit formation, behavior
          change, and continuous improvement. I found myself delivering keynote speeches at conferences in the United States and Europe.
        </p>
      </Container>
    </>
  );
}

export default home;
