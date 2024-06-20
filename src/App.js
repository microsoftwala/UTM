import "./App.css";
import Home from "./component/homescreen.jsx";
import Campaign from "./component/campaign.jsx";
import Plateform from "./component/plateform.jsx";
import Businessregion from "./component/businessregion.jsx";
import Cateogory from "./component/cateogory.jsx";
import Cname from "./component/cname.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStateProvider } from "./component/globalState.jsx";
import Parameter from "./component/parameter.jsx";

function App() {
  return (
    <div className="DSM-Firmenich h-full">
      <GlobalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/plateform" element={<Plateform />} />
            <Route path="/business" element={<Businessregion />} />
            <Route path="/cateogory" element={<Cateogory />} />
            <Route path="/parameter" element={<Parameter />} />
            <Route path="/cname" element={<Cname />} />
          </Routes>
        </BrowserRouter>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
