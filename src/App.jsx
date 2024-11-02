// import DaisyNav from "./components/DaisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import Phone from "./components/Phones/Phone";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className="text-7xl bg-rose-600">Hello World</h1>
      <PriceOptions />
      <LineChart />
      <Phone />
    </>
  );
}

export default App;
