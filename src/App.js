import "./App.css";

import { Header } from "./components/header/header.component.tsx";
import { Sidenav } from "./components/sidenav/side-nav.component.tsx";
import { Body } from "./components/body/body.component.tsx";
import { Footer } from "./components/footer/footer.component.tsx";

function App() {
  return (
    <div className="layout">
      <div className="header-block">
        <Header />
      </div>
      <div className="main-block">
        <Sidenav />
        <Body />
      </div>
      <div className="booter-block">
        <Footer />
      </div>
    </div>
  );
}

export default App;
