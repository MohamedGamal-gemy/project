import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const SideRight = () => {
  const inf = [
    {
      title: "Session",
      name: "Sandbox project",
      owner: "Mohamed",
    },
    {
      title: "Object",
      name: "Sandbox project",
      number: 4556,
      owner: "Khaled",
    },
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ cursor: "pointer" }}>
          {open ? (
            <span
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                left: "10px",
                zIndex: "999",
                fontSize: "25px",
                color: "red",
              }}
            >
              x
            </span>
          ) : (
            <FontAwesomeIcon
              color="#0dcaf0"
              icon={faBars}
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        {open && (
          <Row>
            <Col>
              <Card className="shadow">
                <Card.Header className="bg-warning text-center">
                  <h4>Main Info</h4>
                </Card.Header>
                <Card.Body>
                  {inf.map((item) => (
                    <Card className="shadow my-3" key={item.title}>
                      <Card.Body>
                        <h5 className="text-center mb-3">
                          Current {item.title}
                        </h5>
                        <div className="d-flex flex-column gap-2">
                          <div className="d-flex">
                            <h6 className="font-weight-bold">Name:</h6>
                            <p className="mb-0 text-start">{item.name}</p>
                          </div>
                          {item.number && (
                            <div className="d-flex gap-2">
                              <h6 className="font-weight-bold">Number:</h6>
                              <p className="mb-0">{item.number}</p>
                            </div>
                          )}
                          <div className="d-flex gap-2">
                            <h6 className="font-weight-bold">Owner:</h6>
                            <p className="mb-0">{item.owner}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default SideRight;
