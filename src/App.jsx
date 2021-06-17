import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Route path="/"  />
    </Layout>
  );
}

export default App;
