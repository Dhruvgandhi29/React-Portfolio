import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Projects, Contact, Education } from "./Components/Contents";
import Nav from "./Components/Nav";
function App() {
  const appstyle = { width: "100%", minHeight: "100vh", minWidth: "100vw" };
  const portfoliostyle = { width: "100%", height: "100%" };
  return (
    <div style={appstyle} className="background d-flex flex-column ">
      <div className="d-flex flex-column" style={portfoliostyle}>
        <HashRouter>
          {/* nav bar defines the styling aand displays itself */}
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/*The dedicated route path links the Link and each function*/}
            <Route path="/home" element={<Home />}></Route>
            <Route path="/educate" element={<Education />}></Route>
            <Route path="/project" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
