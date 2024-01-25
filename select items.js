import Button from './Button';
import unitJson from './unit.json'
import UnitItems from './UnitItems';
import './unit.css'
function Unit(props){
 
    
    const HandleClick = (e) =>{
       
        
        var units = unitJson;
        var unitTable = document.querySelector('.input-group-text');
        unitTable.innerHTML="";
        var unit = (e.target.innerText).trim();
        // units[unit] = units['lenght] = ... lenght{ ... }  
        for (var supunit in units[unit]){
            unitTable.innerHTML+='<select class="selects" ><option>'+supunit+'</option></select>';
           
            // units[unit][supunit] = units['lenght]['meters'] = ... meter{ ... }
            

        } 

        var selects = document.querySelectorAll('.selects');
        var selectsLen = selects.length;
        for(var i=0; i<selectsLen; i++){
            var obj = selects[i].innerText;
            for (var sub in units[unit][obj]){
                selects[i].innerHTML+='<option class="options">' + sub + '</option>';
            }

        }

            
        
         
    
          

    
  
    }
    return(
        <div className="row but_tble">
            <div className="button-table">

            
        <p className="rough">Please to select a unit for convert</p>
        <div className="row row-cols-auto gy-2 gx-1  butts">
        <Button onClick={HandleClick}  icon="ruler" text="Length"/>
        <Button onClick={HandleClick} icon="tint" text="Volume" />
        <Button onClick={HandleClick} icon="weight-hanging" text="Weight" />
        <Button onClick={HandleClick} icon="money-bill-wave-alt" text="Currency"/>
        <Button onClick={HandleClick} icon="running" text="Speed"/>
        <Button onClick={HandleClick} icon="hourglass-half" text="Time"/>
        <Button onClick={HandleClick} icon="temperature-low" text="temperature"/>
        <Button onClick={HandleClick} icon="plus-circle" text="More units ..."/>


        </div>
        </div>
        </div>
    );
}
export default Unit