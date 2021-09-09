import Brief from './components/Brief/Brief'
import Header from './components/Header/Header'
import Different from "./components/Different/Different"
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Brief></Brief>
      <Different/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
