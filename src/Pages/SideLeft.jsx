const SideLeft = () => {
  return (
    <div className="w-25 shadow">
      <h4 className="bg-info text-center py-2 ">Actions</h4>
      <div className="h-100 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column gap-3 w-100">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <button key={i} className="btn btn-info w-75 mx-auto">
                Action {i + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
