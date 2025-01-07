import { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";

const SideLeft = () => {
  return (
    <div className="w-25">
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Header className="bg-info text-white text-center py-2">
              <h4>Actions</h4>
            </Card.Header>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex flex-column gap-3 w-100">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Button key={i} variant="info" className="w-75 mx-auto">
                      Action {i + 1}
                    </Button>
                  ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SideLeft;
