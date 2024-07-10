import "./App.css";
import Outlate from "../src/assets/Components/Outlates/Outlate";
import { Routes, Route } from "react-router-dom";
import Hero from "../src/assets/Components/MainHeroPages/Hero";
import Show from "../src/assets/Components/Show/Show";
import NotFound from "../src/assets/Components/NotFound/NotFound";
import SignUp from "../src/assets/Components/Signup/SignUp";
import SignIn from "../src/assets/Components/SignIn/SignIn";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlate />}>
          <Route index element={<Hero />} />
          <Route path="/show/:id" element={<Show />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
