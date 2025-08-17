import Timer from "../components/Timer/Timer.jsx";
import TaskList from "../components/Tasks/TaskList.jsx";
import Container from "../components/Layout/Container.jsx";
import "./App.css";

function App() {
  return (
    <Container>
      <Timer />
      <TaskList />
    </Container>
  );
}

export default App;
