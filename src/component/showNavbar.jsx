import { TiThMenu } from "react-icons/ti";
import Navbar from "../component/Navbar";

const ShowNavBar = ({ showNav, setShownav }) => {
  return (
    <>
      {" "}
      {showNav ? (
        <div
          className="absolute z-20 cursor-pointer text-2xl "
          onClick={() => {
            setShownav(!showNav);
          }}
        >
          <TiThMenu />
        </div>
      ) : (
        <div className="relative">
          <div className="absolute z-10">
            <Navbar setShownav={setShownav} showNav = {showNav}/>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowNavBar;
