import { Accordion, Form } from "react-bootstrap";

// import datas from "../server/data.json";
const RenderData = () => {
  // console.log(datas.data.obj_workflow.static_structure);

  const data = [
    {
      instances: ["instance 1", "instance 2"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: [
        "instance 1",
        "instance 2",
        "instance 3",
        "instance 4",
        "instance 5",
        "instance 6",
      ],
      actions: ["action 1", "action 2", "action 3", "action 4", "action 5"],
    },
    {
      instances: ["instance 1", "instance 2"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: ["instance 1", "instance 2", "instance 3"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: ["instance 1", "instance 2", "instance 3"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: ["instance 1", "instance 2", "instance 3"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: ["instance 1", "instance 2", "instance 3"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: ["instance 1", "instance 2", "instance 3"],
      actions: ["action 1", "action 2"],
    },
    {
      instances: ["instance 1", "instance 2", "instance 3"],
      actions: ["action 1", "action 2"],
    },
    // {
    //   instances: ["instance 1", "instance 2", "instance 3"],
    //   actions: ["action 1", "action 2"],
    // },
    // {
    //   instances: ["instance 1", "instance 2", "instance 3"],
    //   actions: ["action 1", "action 2"],
    // },
    // {
    //   instances: ["instance 1", "instance 2", "instance 3"],
    //   actions: ["action 1", "action 2"],
    // },
    // {
    //   instances: ["instance 1", "instance 2", "instance 3"],
    //   actions: ["action 1", "action 2"],
    // },
  ];

  return (
    <>
      {data.map((e, i) => (
        <Accordion.Item eventKey={i} key={i} className="custom-item">
          <Accordion.Header>Objects {i + 1}</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex gap-3 align-items-start">
              <div className="w-50">
                <h6 style={{ color: "#0dcaf0" }}>
                  Instance ({e.instances.length})
                </h6>
                <div className="tes inset-obj">
                  {e.instances.map((inst, indx) => (
                    <Form.Check
                      type="radio"
                      name={`radioGroup-${i}`}
                      label={inst}
                      key={indx}
                      id={`radio-${i}-${indx}`}
                      className="my-1 "
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="w-50 ">
                <h6 style={{ color: "#0dcaf0" }}>
                  Actions ({e.actions.length})
                </h6>
                <div className="inset-obj">
                  {e.actions.map((action, indx) => (
                    <Form.Check
                      type="radio"
                      name={`radioGroup-${i}`}
                      label={action}
                      key={indx}
                      id={`radio-${i}-${indx}`}
                      className="mb-2"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </>
  );
};

export default RenderData;
