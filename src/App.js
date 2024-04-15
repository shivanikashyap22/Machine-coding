import "./App.css";
import BackgroundChange from "./Components/BackgroundColor/BackgroundChange";
import CountDownTimer from "./Components/CountDownTimer/CountDownTimer";
import Counter from "./Components/Counter/Counter";
import FormCrud from "./Components/CRUD/FormCrud";
import FormValidation from "./Components/FormValidation/FormValidation";
import Progress from "./Components/Progress/Progress";
import Quiz from "./Components/Quiz/Quiz";
import StarRating from "./Components/StarRating/StarRating";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
