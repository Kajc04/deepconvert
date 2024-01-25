import './button.css'
import './bootstrap-icons.css'
function Button(props){
    


 
    return (
        <div className="button">
            <button onClick={props.onClick}   style={{backgroundColor: props.backgroundColor}} type="button" className={`btn btt fas fa-${props.icon} unitselect`}> {props.text}</button>
            
      
        </div>

    );
}
export default Button