import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="container px-8">
      <Header />
      <Banner/>
      <Recipes/>
    </div>
  );
}

export default App;
