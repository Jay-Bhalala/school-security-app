import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mapPlaceHolder from './preschool-map-placeholder.jpg';
import Updates from "./Updates";
import Forum from "./Forum";
import Attendance from "./Attendance/Attendance";
import Map from "./Map";

function Home() {
    return (
      <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title><a href='/map'> Map </a></Card.Title>
                <Card.Text>
                  <Map />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '41rem' }}>
              <Card.Body>
                <Card.Title><a href='/updates'>Updates</a></Card.Title>
                <Card.Text>
                  <Updates />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '41rem' }}>
              <Card.Body>
                <Card.Title><a href='/attendance'>Missing Students</a></Card.Title>
                <Card.Text>
                  <Attendance />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '41rem' }}>
              <Card.Body>
                <Card.Title><a href='/forum'>Forum</a></Card.Title>
                <Card.Text>
                  <Forum />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
}

export default Home;