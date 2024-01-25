import React, {useState, useEffect} from 'react'
import './unitboard.css'
import './unititems.css'
import './unitboardbutton.css'
import unitJson from './unit.json'
import './UnitItems'
import './UnitBoxLeft'
import './UnitBoxRight'
import UnitBoxLeft from './UnitBoxLeft'
import UnitBoxRight from './UnitBoxRight'
import Unit from './Unit'



function UnitBoard(props) {
  //data output to the users
  const [output, setOutput] = useState(0);

  //data input by the users
  const [input, setInput] = useState(0);

  //selected unit left
  const [subunitLeft, setSubunitLeft] = useState('');
  //selected unit value left
  const [subunitValueLeft, setSubunitValueLeft] = useState(0);

  //selected unit right
  const [subunitRight, setSubunitRight] = useState('');
  //selected unit value right
  const [subunitValueRight, setSubunitValueRight] = useState(0);

useEffect(()=>{
  handleChange();
},[subunitLeft,subunitValueLeft,subunitRight,subunitValueRight]);





const handleClickLeft = (unit, value) =>{

  setSubunitLeft(unit);
  setSubunitValueLeft(value);

}

const handleClickRight = (unit,value) =>{
  
  setSubunitRight(unit);
  setSubunitValueRight(value);
}


const handleChange = () =>{

  
  var input = document.getElementById('input').value.trim();
  setInput(input);
 
  input = parseFloat(input);
  
  

  var first = ((subunitValueRight   / subunitValueLeft)); 


  var result = (first) * input ;


  
  setOutput(result);
   
}



    return (
<div>
      <Unit onClickLeft={handleClickLeft} onClickRight={handleClickRight} />
     
  <div className="row justify-content-sm-center g-0">
      <div className="col-md-5 col-xs-6"> Convert from <span className="unitSelected">{subunitLeft}</span>
        <UnitBoxLeft onChange={handleChange}/>
      </div>
    < div className="col-md-auto justify-content-center  fas fa-exchange-alt"></div>
    <div className="col-md-5 col-xs-6">  To <span className="unitSelected">{subunitRight}</span>
      <UnitBoxRight value={input ? output: 'Please to enter a number'}/>
    </div>
    <div className="d-none d-xl-block d-lg-block col-1 data-box">Data Box
      <div className="row">
        <textarea className="col-auto" contentEditable="false" disabled></textarea>
      </div>
    
    </div>
  </div>

  </div>     
        
    )
}
export default UnitBoard                      