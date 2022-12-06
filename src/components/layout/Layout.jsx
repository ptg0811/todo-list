// src/shared/Layout.js

import React from "react";
import Header from "../header/Header";

const layoutStyles = {
  margin: "0 auto",
  maxWidth: "1200px",
  minWidth: "800px",
};

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>{children}</div>
    </div>
  );
}

export default Layout;
