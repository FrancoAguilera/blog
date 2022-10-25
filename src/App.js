import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header.component.tsx";
import { Sidenav } from "./components/sidenav/side-nav.component.tsx";
import { Body } from "./components/body/body.component.tsx";
import { Footer } from "./components/footer/footer.component.tsx";
import { EditorPage } from "./components/editor/editor.component.tsx";

import "./App.css";

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="main-block">
        <Sidenav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
