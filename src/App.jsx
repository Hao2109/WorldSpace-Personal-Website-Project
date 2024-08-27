import Header from "./components/Header";
import Footer from "./components/Footer";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/cores" element={<Cores />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/crew/:id" element={<SingleCrew />} />
            <Route path="/dragons" element={<Dragon />} />
            <Route path="/dragons/:id" element={<SingleDragon />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/launches/:id" element={<SingleLaunches />} />
            <Route path="/roadster" element={<Roadster />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/rockets/:id" element={<SingleRocket />} />
            <Route path="/ships" element={<Ships />} />
            <Route path="/ships/:id" element={<SingleShip />} />
            <Route path="/starlink" element={<Starlink />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
