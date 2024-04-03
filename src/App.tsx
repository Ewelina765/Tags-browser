import TableWithPaginationComponent from "./components/TableWithPaginationComponent";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">StackOverflow Tags Browser</h1>
      <TableWithPaginationComponent />
    </div>
  );
}

export default App;
