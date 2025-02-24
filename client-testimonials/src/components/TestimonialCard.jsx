import './TestimonialCard.css'
import DataArray from './data.json'

function TestimonialCard(name,review){
  return(
    <div>
      <h2> name: {name}</h2>
      <p>review:{review}</p>
    </div>
  )
}


export default TestimonialCard