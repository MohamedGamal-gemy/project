import MainContent from "./MainContent";
import SideLeft from "./SideLeft";
import SideRight from "./SideRight";

const Layout = () => {
  return (
    <div className="d-flex gap-3 flex-grow-1 mt-4    px-3 ">
      <SideLeft />
      <MainContent />
      <SideRight />
    </div>
  );
};

export default Layout;
