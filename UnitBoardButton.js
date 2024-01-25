import './button.css'
import './unitboardbutton.css'
import './bootstrap-icons.css'

function Button(props){
    
    function selectedButtonClick(e) {
        if(e.target.nodeName === 'BUTTON'){
        e.target.style.backgroundColor='#41bb8d';
        }
    }
    
    function selectedButtonBlur(e) {
        if(e.target.nodeName === 'BUTTON'){
        e.target.style.backgroundColor='rgb(193, 221, 202)';
        }
    }
    
    return (
        <div className="button">
            <button alt="Please to select a unit" disabled onClick={selectedButtonClick} onBlur={selectedButtonBlur}  style={{backgroundColor: props.color }} type="button" className="btn btt board"><i className={`bi bi-${props.icon}`}></i>  {props.text}</button>

      
        </div>

    );
}
export default Button