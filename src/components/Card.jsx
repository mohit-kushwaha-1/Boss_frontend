import React from 'react'
import img1 from '../../public/images/img1.png'
const Card = () => {
  return (
    <>

    <div>
    <div className="card" style={{height:"100%",border:"none"}}>
  <img src={img1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Reservations/Collections
    Clerk</h5>

    <p>Philipsburg, Sint Maarten</p>
     
     <div>
           <div>
           Noord Holland
           </div>

           <div>
           Noord Holland
           </div>
     </div>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>

    </>
  )
}

export default Card
