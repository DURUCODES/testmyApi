import Header from "./componets/Header";
import LandingBody from "./componets/LandingBody";
import jsonData from "./data.json";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LandingDetails from "./componets/LandingDetails";
import moon from "./icons/imgs/moon.png";
import backPointer from "./icons/imgs/backicon.png";
import searchicon from "./icons/imgs/search.png";
function App() {
  return (
    <>
      <Header moon={moon} />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<LandingBody data={jsonData} searchIcon={searchicon} />}
            ></Route>
            <Route
              path="/:Id"
              element={
                <LandingDetails data={jsonData} backPointer={backPointer} />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
