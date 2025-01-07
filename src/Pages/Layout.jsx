import MainContent from "./MainContent";
import SideLeft from "./SideLeft";
import SideRight from "./SideRight";

const Layout = () => {
  return (
    <div
      style={{ overflow: "hidden" }}
      className="d-flex gap-3 justify mt-4  bg-  px-3 "
    >
      <SideLeft />
      <div className="flex-grow-1">
        <MainContent />
      </div>
      {/* <div */}
      {/* // style={{ position: "relative", left: "0%", background: "red" }} */}
      {/* > */}
      <SideRight />
      {/* </div> */}
    </div>
  );
};

export default Layout;
