import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";
import List from "./Pages/List";
import Info from "./Pages/Info";
import Send from "./Pages/Send";
import Sent from "./Pages/Sent";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />{" "}
          <Route path="contact-info/:id" element={<Info />} />{" "}
          <Route path="send/:id" element={<Send />} />{" "}
          <Route path="sent-list" element={<Sent />} />{" "}
          <Route path="*" element={<NoPage />} />{" "}
        </Route>{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
