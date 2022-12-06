import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";
import Layout from "../components/layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
