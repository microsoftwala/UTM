import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Background from "../../public/background1.jpg";

const AppLayout = () => {
  return (
    <div>
      <main
        className="min-h-screen container bg-gradient-to-r from-black via-slate-900 to-slate-800"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gradient-to-r from-black via-slate-900 to-slate-800 text-black text-2xl font-semibold font-serif">
        <span className="animated-text">Made by प्रखर</span>
      </div>
    </div>
  );
};

export default AppLayout;
