import "./App.css";
import Navbar from "./components/SideNavBar/Navbar";
import SideNav from "./components/SideNavBar/SideNav";
import Overview from "./components/Overview/Overview";
import Content from "./components/Overview/Overview";

function App() {
  return (
    <div className=" bg-background w-full">
      <Navbar />
      <div className="flex items-start space-x-2 justify-start w-full">
        <SideNav className="mr-10" />

        <Content />
      </div>
    </div>
  );
}

export default App;
