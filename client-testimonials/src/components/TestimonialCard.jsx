import './TestimonialCard.css'

function TestimonialCard({ name, review }) {
  return(
    <div>
      <h2>Name: {name}</h2>
      <p>Review: {review}</p>
    </div>
  )
}

export default TestimonialCard
