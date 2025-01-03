const MainContent = () => {
  return (
    <div className="shadow-sm ">
      <h4 className="bg-info text-center py-2 ">Objects</h4>

      <div className="d-flex justify-content-between align-items-center gap-3 mx-4">
        <div className="mt-4 d-flex flex-column gap-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                className="btn btn-info  text-center mx-auto rounded"
                style={{ width: "200px", cursor: "pointer" }}
              >
                Object {i + 1}
              </button>
            ))}
        </div>

        {/* Dropdown for Instance */}
        <select className="form-select w-50" aria-label="Instance select">
          <option disabled selected>
            Instance (2)
          </option>
          <option value="action1">Instance 1</option>
          <option value="action2">Instance 2</option>
        </select>
        {/* Dropdown for Actions */}
        <select className="form-select w-50" aria-label="Actions select">
          <option disabled selected>
            Actions (1)
          </option>
          <option value="action1">Action object 1</option>
        </select>
      </div>
    </div>
  );
};

export default MainContent;
