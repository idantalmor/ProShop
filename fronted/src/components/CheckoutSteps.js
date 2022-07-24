import React from "react";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const navigate = useNavigate();
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Container>
            <Nav.Link onClick={() => navigate("/login")}>Sign In</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Container>
            <Nav.Link onClick={() => navigate("/shipping")}>Shipping</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Container>
            <Nav.Link onClick={() => navigate("/payment")}>Payment</Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Container>
            <Nav.Link onClick={() => navigate("/placeorder")}>
              Place Order
            </Nav.Link>
          </Container>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
