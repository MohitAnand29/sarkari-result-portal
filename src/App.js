import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";   // ✅ add this
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
