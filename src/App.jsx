import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Capsules from "./pages/Capsules";
import Cores from "./pages/Cores";
import Crew from "./pages/Crew";
import SingleCrew from "./pages/SingleCrew";
import Dragon from "./pages/Dragon";
import SingleDragon from "./pages/SingleDragon";
import Launches from "./pages/Launches";
import SingleLaunches from "./pages/SingleLaunches";
import Roadster from "./pages/Roadster";
import Rockets from "./pages/Rockets";
import SingleRocket from "./pages/SingleRocket";
import Ships from "./pages/Ships";
import SingleShip from "./pages/SingleShip";
import Starlink from "./pages/Starlink";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/capsules" element={<Capsules />}></Route>
          <Route path="/cores" element={<Cores />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/crew/:id" element={<SingleCrew />}></Route>
          <Route path="/dragons" element={<Dragon />}></Route>
          <Route path="/dragons/:id" element={<SingleDragon />}></Route>
          <Route path="/launches" element={<Launches />}></Route>
          <Route path="/launches/:id" element={<SingleLaunches />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/roadster" element={<Roadster />}></Route>
          <Route path="/rockets" element={<Rockets />}></Route>
          <Route path="/rockets/:id" element={<SingleRocket />}></Route>
          <Route path="/ships" element={<Ships />}></Route>
          <Route path="/ships/:id" element={<SingleShip />}></Route>
          <Route path="/starlink" element={<Starlink />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
