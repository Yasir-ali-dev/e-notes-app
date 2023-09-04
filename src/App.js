import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

import TasksContext from "./components/TasksContext";
import MainPage from "./pages/MainPage";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <TasksContext>
      <AddNote />
    </TasksContext>
  );
}

export default App;
