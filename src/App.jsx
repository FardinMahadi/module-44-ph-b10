// import DaisyNav from "./components/DaisyNav/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className="text-7xl bg-rose-600">Hello World</h1>
      <PriceOptions />
    </>
  );
}

export default App;
