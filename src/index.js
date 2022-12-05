import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Footer({ children }) {
  return (
    <div>
      <div style={Style} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
};
const footerStyle = {
  backgroundColor: "#bfbfbf",
  fontSize: "16px",
  color: "#99999f",
  textAlign: "center",
  padding: "15px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "15px",
  width: "100%"
};

const Style = {
  display: "block",
  padding: "2px",
  height: "60px",
  width: "100%"
};

root.render(
  <StrictMode>
    <App />
    <Footer>
    <span>Web Atividade 3 - Introdução ao Desenvolvimento Web</span>
  </Footer>
  </StrictMode>
);