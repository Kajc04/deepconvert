import Button from './UnitBoardButton'

function UnitItemsLeft(){
    
    return (
        <div>
            <span id="left" className="input-group-text">
          <Button  text="Meters"/>
          <Button  text="Volume" />
          <Button  text="Weight" />
          
            </span>
        </div>
        
    )

  
}

export default UnitItemsLeft