import Brief from './components/Brief/Brief'
import Header from './components/Header/Header'
import Different from "./components/Different/Different"
import CallToAction from './components/CallToAction/CallToAction'

function App() {
  return (
    <div className="App">
      <Header/>
      <Brief></Brief>
      <Different/>
      <CallToAction/>
    </div>
  );
}

export default App;
