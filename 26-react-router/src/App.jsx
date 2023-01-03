import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import Courses from "./components/Courses";
import Course from "./components/Course";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:id" element={<Course />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
