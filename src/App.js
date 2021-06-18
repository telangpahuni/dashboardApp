import './App.css';
import BarChart from './components/BarChart';
import Header from './components/Header';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  return(
    <div className='container'>
      <div className='header'>
          <Header/>
      </div>
      <div className='barChart'>
          <BarChart />
      </div>
      <footer className='page-footer'>
          <Footer/>
      </footer>
  </div>
  )
}

export default App