import './App.css';
import './fontawesome-free-5.15.4-web/css/all.min.css';
import Header from './Header.js'
import Alert from  './Alert';

import UnitBoard from './UnitBoard'
import Footer from './Footer'


function App() {

  return (
   
    <div className="App">
      <Header/>
      <Alert/>
         
      
      <UnitBoard/>
      <Footer/> 
      </div>
      
    
    
    
  );
}

export default App;
