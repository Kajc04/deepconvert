import { BrowserRouter as Router, Route } from "react-router-dom";
import Button from './Button';
import unitJson from './unit.json'
import './unit.css'
function Unit(props){
    
    
    const HandleClick = (e) =>{
       var unitSelected = document.querySelectorAll('.unitSelected');
       for (var k=0;  k< unitSelected.length; k++){
           unitSelected[k].innerHTML="";
       }   
       
        var other = document.querySelectorAll('.unitselect');
        var otherLen = other.length;
        for(var i =0; i<otherLen; i++){
            other[i].style.backgroundColor='rgb(193, 221, 202)';
            e.target.style.backgroundColor='#41bb8d';
        }
        var units = unitJson;
        var LeftTable = document.getElementById('left');
            LeftTable.innerHTML = "";

         var RightTable = document.getElementById('right');
            RightTable.innerHTML = "";
            
            
            var unit = (e.target.innerText).trim();
        // units[unit] = units['lenght] = ... lenght{ ... }  
        for (var supunit in units[unit]){
            LeftTable.innerHTML+='<div class="dropdown">' +
            '<button class="btn  dropdown-toggle butclass " type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="true">'
             + supunit +
            '</button>' +
            '<ul class="selectsLeft subunit_li dropdown-menu" aria-labelledby="dropdownMenuButtonSM" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 33px);" data-popper-placement="bottom-start">' +
              '<li><h6 class="dropdown-header">'+supunit+'</h6></li></ul></div>';

              RightTable.innerHTML+='<div class="dropdown">' +
              '<button class="btn  dropdown-toggle butclass " type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="true">'
               + supunit +
              '</button>' +
              '<ul class="selectsRight subunit_li dropdown-menu" aria-labelledby="dropdownMenuButtonSM" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 33px);" data-popper-placement="bottom-start">' +
                '<li><h6 class="dropdown-header">'+supunit+'</h6></li></ul></div>';
           
            // units[unit][supunit] = units['lenght]['meters'] = ... meter{ ... }
            

        } 
        
       
        
        //leftBoard

        var selectsRight = document.querySelectorAll('.selectsLeft');
        var selectsLeftLen = selectsRight.length;
        for(var i=0; i<selectsLeftLen; i++){
            var obj = selectsRight[i].innerText;
            for (var sub in units[unit][obj]){
                selectsRight[i].innerHTML+='<li><a  class="subunit dropdown-item ">'+sub +'</a><p style="display:none">' + units[unit][obj][sub]+  '</p></li>';  
                selectsRight[i].addEventListener('click', function(e){
                    var leftCurrentUnit = e.target.innerText.trim();
                    var leftCurrentUnitValue = e.target.nextSibling.innerText.trim();
                    props.onClickLeft(leftCurrentUnit, leftCurrentUnitValue);
                   
                    
                    
                   
                })
                
                
            }
       
        }

        //rightBoard
        var selectsRight = document.querySelectorAll('.selectsRight');
        var selectsLeftLen = selectsRight.length;
        for(var i=0; i<selectsLeftLen; i++){
            var obj = selectsRight[i].innerText;
            for (var sub in units[unit][obj]){
                selectsRight[i].innerHTML+='<li><a  class="subunit dropdown-item ">'+sub +'</a><p style="display:none">' + units[unit][obj][sub]+  '</p></li>';  
                selectsRight[i].addEventListener('click', function(e){
                    var rightCurrentUnit = e.target.innerText.trim();
                    var rightCurrentUnitValue = e.target.nextSibling.innerText.trim();
                    
                    props.onClickRight(rightCurrentUnit, rightCurrentUnitValue);
                    
                })
                
                
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
        <Button onClick={HandleClick} ctg="special" icon="money-bill-wave-alt" text="Currency"/>
        <Button onClick={HandleClick} icon="running" text="Speed"/>
        <Button onClick={HandleClick} icon="hourglass-half" text="Time"/>
        <Button onClick={HandleClick} icon="temperature-low" text="Temperature"/>
        <Button onClick={HandleClick} icon="plus-circle" text="More units"/>

        </div>
        </div>
        </div>
    );
}
export default Unit