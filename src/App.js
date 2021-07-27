import './App.css';
import Header from './components/Header/Header';
import Sidbar from './components/Sidbar/Sidbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Connecting from './Connecting/Connecting'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidbar />
        <Main/>
        
      <Footer/>
      {/* <Connecting/> */}
    </div>
  );
}

export default App;
