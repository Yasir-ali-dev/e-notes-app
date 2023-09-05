import AddNote from "./components/AddNote";
import Layout from "./components/Layout";
import NotesList from "./components/NotesList";

import TasksContext from "./components/TasksContext";
import AboutUs from "./pages/AboutUs";
import MainPage from "./pages/MainPage";

import { Routes, Route } from "react-router";

function App() {
  return (
    <TasksContext>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </TasksContext>
  );
}

export default App;
