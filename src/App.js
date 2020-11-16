import './App.css';

//import function to display in the web
import Navbar from '../src/page/navbar/Navbar'
import Footer from '../src/page/footer/Footer'
import Header from './page/Header'
import Benefit from './page/Benefit'
import Product from './page/Product'
import Review from './page/Review'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Benefit/>
      <Product/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
