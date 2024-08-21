import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Capsules from "./pages/Capsules";
import Cores from "./pages/Cores";
import Crew from "./pages/Crew";
import SingleCrew from "./pages/SingleCrew";

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
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
