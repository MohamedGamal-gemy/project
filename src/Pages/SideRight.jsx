import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MainInfo = () => {
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


  return (
    <div className="w-25 shadow ">
      <h4 className="bg-info py-2">action</h4>

      <div className="mx-2">
        {inf.map((item) => (
          <div key={item.title} className="shadow-sm my-4 p-3">
            <h5>Current {item.title}</h5>

            <div className="d-flex flex-column gap-2">
              <div className="d-flex ">
                <h6 className="font-weight-bold ">Name :</h6>
                <p className="mb-0 text-start ">{item.name}</p>
              </div>
              {item.number && (
                <div className="d-flex gap-2">
                  <h6 className="font-weight-bold">Number :</h6>
                  <p className="mb-0">{item.number}</p>
                </div>
              )}
              <div className="d-flex gap-2">
                <h6 className="font-weight-bold">Owner :</h6>
                <p className="mb-0">{item.owner}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainInfo;
