import Button from './UnitBoardButton'
import UnitItemsRight from './UnitItemsRight'
import PropTypes from 'prop-types';

 function UnitBoxRight(props){


 
  return (
        
    <div className="input-group right ">
 
          <UnitItemsRight/>

          <textarea  id="output" disabled value={props.value} className="form-control disabled" aria-label="With textarea"></textarea>
        </div>
    
     )
 }

 UnitBoxRight.defaultProps ={
   value:0
 }
 UnitBoxRight.propTypes = {
  value: PropTypes.number.isRequired
};

 export default UnitBoxRight