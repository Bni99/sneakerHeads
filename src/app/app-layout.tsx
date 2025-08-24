import { Outlet } from "react-router-dom";
import Footer from "../widgets/footer";
import Header from "../widgets/header";

const AppLayout = () => {
  return (
    <div className="mr-42 ml-42">
      <Header />
      <div className="h-[100%]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
