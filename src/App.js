import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./Components/HomeComponent";
import HomeScreen from "./Screens/HomeScreen";
import PrivateRoute from "./Routes/PrivateRoute";
import HeaderComponent from "./Components/HeaderComponent";

function App() {
  return (
    <div className="container-fluid  " style={{ backgroundColor: "#17a2b8" }}>
      <PrivateRoute />
    </div>
  );
}

export default App;
