import {
  Link
} from "react-router-dom";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/portals">Portals</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
