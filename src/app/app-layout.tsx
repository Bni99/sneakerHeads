import { Outlet } from "react-router-dom";
import Footer from "../widgets/footer";
import Header from "../widgets/header";

const AppLayout = () => {
  return (
    <div className="border-2 border-black h-[100vh] ml-42 mr-42">
      <Header />
      <div className="h-[100%] border-2 border-black">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
