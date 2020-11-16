import './App.css';

//import function to display in the web
import Navbar from '../src/page/navbar/Navbar'
import Footer from '../src/page/footer/Footer'
import Header from './page/Header'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
