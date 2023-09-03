import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import TasksContext from "./components/TasksContext";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <TasksContext>
      <Navbar />
    </TasksContext>
  );
}

export default App;
