import Button from './UnitBoardButton'

function UnitItems(){
    
    return (
        <div>
            <span className="input-group-text">
          
          <Button  icon="rulers" text="Meters"/>
          <Button  icon="bucket-fill" text="Volume" />
          <Button  icon="circle-fill" text="Weight" />
          
      
          
            </span>
        </div>
    )

  
}

export default UnitItems