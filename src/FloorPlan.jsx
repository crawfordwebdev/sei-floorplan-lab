import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

const FloorPlan = (props) => {
  return(
    <div>
      <LivingRoom />
      <Kitchen />
      <Bedroom bedNum={2}/>
      <Bath size={'Full'} />
    </div>
  )

}

export default FloorPlan