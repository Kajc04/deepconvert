import Button from './UnitBoardButton'
import UnitItemsLeft from './UnitItemsLeft'
import PropTypes from 'prop-types';



function UnitBoxLeft (props) {

    const HandleFocus = (e) =>{
        e.target.style.backgroundColor='#fdf7d5';
       
    }

    const HandleBlur = (e) =>{
        e.target.style.backgroundColor='white';
    }

    


    return (

        
    <div className="input-group left">
      
            <UnitItemsLeft/>
            
          <textarea   id="input"  onChange={props.onChange} onFocus={HandleFocus} onBlur={HandleBlur}  className="form-control" aria-label="With textarea"></textarea>
        
        </div>
   
    )
}




UnitBoxLeft.propTypes = {
    value: PropTypes.number.isRequired
};

export default UnitBoxLeft