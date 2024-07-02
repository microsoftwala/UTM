import React from "react";
import "./App.css";
import Home from "./pages/homescreen.jsx";
import Campaign from "./pages/campaign.jsx";
// import Plateform from "./pages/plateform.jsx";
import Businessregion from "./pages/businessregion.jsx";
// import Cateogory from "./pages/cateogory.jsx";
import Cname from "./pages/cname.jsx";
import Preview from "./pages/preview.jsx";
// import Parameter from "./pages/parameter.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { GlobalStateProvider } from "./component/globalState.jsx";
import { AnimatePresence } from "framer-motion";
import Nopage from "./pages/Nopage.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/campaign&platform" element={<Campaign />} />
        {/* <Route path="/plateform" element={<Plateform />} /> */}
        <Route
          path="/business&category&parameter"
          element={<Businessregion />}
        />
        {/* <Route path="/cateogory" element={<Cateogory />} />
        <Route path="/parameter" element={<Parameter />} /> */}
        <Route path="/cname" element={<Cname />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/:id" element={<Nopage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="DSM-Firmenich h-full">
      <GlobalStateProvider>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </GlobalStateProvider>
    </div>
  );
}

export default App;

// import "./App.css";
// import Home from "./component/homescreen.jsx";
// import Campaign from "./component/campaign.jsx";
// import Plateform from "./component/plateform.jsx";
// import Businessregion from "./component/businessregion.jsx";
// import Cateogory from "./component/cateogory.jsx";
// import Cname from "./component/cname.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { GlobalStateProvider } from "./component/globalState.jsx";
// import { AnimatePresence } from "framer-motion";
// import Parameter from "./component/parameter.jsx";

// function App() {
//   return (
//     <div className="DSM-Firmenich h-full">
//       <AnimatePresence mode="wait">
//         <GlobalStateProvider>
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/campaign" element={<Campaign />} />
//               <Route path="/plateform" element={<Plateform />} />
//               <Route path="/business" element={<Businessregion />} />
//               <Route path="/cateogory" element={<Cateogory />} />
//               <Route path="/parameter" element={<Parameter />} />
//               <Route path="/cname" element={<Cname />} />
//             </Routes>
//           </BrowserRouter>
//         </GlobalStateProvider>
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;
