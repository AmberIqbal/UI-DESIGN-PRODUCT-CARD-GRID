import "./App.css";
import Newarrival from "./Component/Newarrival/Newarrival";
import products from "./Component/Product";

function App() {
  return (
    <>
      <Newarrival products={products} />
    </>
  );
}

export default App;
