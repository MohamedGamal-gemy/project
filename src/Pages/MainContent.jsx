import { Card, Button, Form, Col } from "react-bootstrap";

const MainContent = () => {
  return (
    <Card className="shadow-sm" style={{ height: "100vh" }}>
      <Card.Header className="bg-info text-white text-center py-2">
        <h4>Objects</h4>
      </Card.Header>

      <Card.Body>
        <div className="d-flex justify-content-between align-items-center gap-3 mx-4">
          <div className="mt-4 d-flex flex-column gap-3">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Button
                  key={i}
                  variant="info"
                  className="text-center mx-auto rounded"
                  style={{ width: "200px", cursor: "pointer" }}
                >
                  Object {i + 1}
                </Button>
              ))}
          </div>

          <div className="d-flex gap-3">
            {/* Dropdown for Instance */}
            <Form.Select className="w-50" aria-label="Instance select">
              <option disabled selected>
                Instance (2)
              </option>
              <option value="action1">Instance 1</option>
              <option value="action2">Instance 2</option>
            </Form.Select>

            {/* Dropdown for Actions */}
            <Form.Select className="w-50" aria-label="Actions select">
              <option disabled selected>
                Actions (1)
              </option>
              <option value="action1">Action object 1</option>
            </Form.Select>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MainContent;
