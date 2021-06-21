import './App.css';
import BarChart from './components/BarChart';
import Header from './components/Header';
import Footer from './components/Footer';
import LineChart from './components/LineChart';
import StatusTable from './components/StatusTable';


function App(){

  return(
    <div className='container'>
      <div className='header'>
          <Header/>
      </div>
      <div className='barChart'>
          {/* <BarChart /> */}
          <LineChart />
      </div>
          <StatusTable/>
      <footer className='page-footer'>
          <Footer/>
      </footer>
  </div>
  )
}

export default App