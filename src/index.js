import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './Todos';
import Portals from './Portals';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

let todos = [
  {
    id:'1',
    title:'Read Quran',
    checked: false
  },
  {
    id:'2',
    title:'Learn React',
    checked: false
  },
  {
    id:'3',
    title:'Build Project',
    checked: false
  },
  {
    id:'4',
    title:'Test Code',
    checked: false
  },
]
export const TodosContext = createContext()

ReactDOM.render(
  <React.StrictMode>
    <TodosContext.Provider value={todos} >
    <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
                <Route exact  path="/" element={<App />}></Route>
                <Route exact  path="/todos" element={<Todos />}></Route>
                <Route exact path="/portals" element={<Portals />}></Route>
            </Routes>
          </Router>
        </header>
    </div>
    </TodosContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
