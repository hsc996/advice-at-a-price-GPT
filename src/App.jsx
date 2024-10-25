import "./styles/App.css";
// import trollDP from './assets/profile_troll_dp.jpg'
// import personalDP from './assets/selfport2.JPG'
import { HandleQuestion } from "./components/handleQuestion";
import { Sidebar } from "./components/Sidebar";


function App() {

  return (
    <div className="App">
      <div>
          <Sidebar />
      </div>
      <div>
          <HandleQuestion />
      </div>
    </div>
  );
}

export default App;