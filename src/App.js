import './App.css';
import BarChart from './components/BarChart';
import Header from './components/Header';
import Footer from './components/Footer';
import LineChart from './components/LineChart';
import StatusTable from './components/StatusTable';
import PageTable from './components/PageTable';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


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
          <PageTable/>
      <footer className='page-footer'>
          <Footer/>
      </footer>
  </div>
  )
}

export default App