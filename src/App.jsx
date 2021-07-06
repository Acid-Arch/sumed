import React from "react";
import { Route } from "react-router";
import Layout  from './components/Layout'
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <Layout>
      <Route path="/" component={Home}  />
    </Layout>
  );
}

export default App;
