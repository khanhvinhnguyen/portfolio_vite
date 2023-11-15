import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Certificate/>
    </div>
  );
}

export default App;
