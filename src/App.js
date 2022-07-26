import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Usecase from "./components/usecase/Usecase";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import Home from "./components/home/Home";
import Inbox from "./components/inbox/Inbox";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/inbox" element={<Inbox />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
