import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Footer extends Component {
  render() {
    return (
      <div className="footer pt-5 pb-4">
        <Container fluid>
          <Row>
            <Col md="5" className="">
              <div className="ps-5">
                <h1>UPNORMAL</h1>
                <p>
                  Be the first to know about our latest news, offers &
                  promotions.
                </p>
                <div className="email d-flex">
                  <input type="text" placeholder="Your Email" />
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="d-flex">
                  <img className="img-sosmed" src="/public/img/wa.png" />
                  <img className="img-sosmed" src="/public/img/igeh.png" />
                </div>
              </div>
            </Col>
            <Col md="7">
              <div className="pe-5">
                <Row>
                  <Col className="text-center">
                    <h3>HELP</h3>
                    <a href="">Contact Us</a>
                    <a href="">Delivery & Self</a>
                    <a href="">Pick Up</a>
                  </Col>
                  <Col className="text-center">
                    <h3>GENERAL</h3>
                    <a href="">Career</a>
                    <a href="">About Us</a>
                    <a href="">Customer Service</a>
                  </Col>
                  <Col className="text-center">
                    <h3>PAYMENT</h3>
                    <Row>
                      <Col className="pe-0">
                        <img className="pay-img" src="/public/img/paypal.png" />
                        <br />
                        <img className="pay-img" src="/public/img/visa.png" />
                        <br />
                        <img className="pay-img" src="/public/img/mc.png" />
                      </Col>
                      <Col className="ps-0">
                        <img className="pay-img" src="/public/img/dana.png" />
                        <br />
                        <img className="pay-img" src="/public/img/ovo.png" />
                        <br />
                        <img className="pay-img" src="/public/img/qris.png" />
                      </Col>
                    </Row>
                  </Col>
                  <Col className="text-center">
                    <h3>PARTNER</h3>
                    <a href="">
                      <img class="part-logo" src="/public/img/or.png" /> ORDHE
                    </a>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="text-center text-white mt-3">
                    <span>
                      Copyright ©2022, Upnormal & Odhe. All rights reserved.
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
