import { useRef } from "react";
import { Card, Accordion } from "react-bootstrap";
import ArrowIcon from "../components/ArrowIcon";
import RenderData from "../components/RenderData";

const MainContent = () => {
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);

  return (
    <Card
      ref={scrollContainerRef}
      className="shadow-sm scr"
      style={{
        height: "400px",
        overflowY: "auto",
        behavior: "smooth",
      }}
    >
      <Card.Header
        style={{ position: "sticky", top: "0", zIndex: "555" }}
        className="bg-info text-white text-center py-2"
      >
        <h4>Objects</h4>
      </Card.Header>

      <Card.Body ref={scrollContainerRef2}>
        <div className="mx-4">
          <div className="mt-4">
            <Accordion className="d-flex flex-column gap-4 custom-accordion">
              <RenderData />
            </Accordion>
          </div>
        </div>

        <ArrowIcon {...{ scrollContainerRef, scrollContainerRef2 }} />
      </Card.Body>
    </Card>
  );
};

export default MainContent;
