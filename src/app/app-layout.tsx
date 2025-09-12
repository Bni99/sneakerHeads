import { Outlet } from "react-router-dom";
import Footer from "../widgets/footer";
import Header from "../widgets/header";
import { Toast } from "../shared";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="h-[100%]">
        <Outlet />
      </div>
      <Toast />
      <Footer />
    </div>
  );
};

export default AppLayout;
