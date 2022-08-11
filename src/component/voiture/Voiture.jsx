import React from 'react'
import PropTypes from "prop-types";
const Voiture = ({car , handlePrice }) => {
    console.log(car);
  return (
    <div>
       {
        car.map(el=>(
            <dir>
                <h1>{el.brand}</h1>
                <img style={{width:"500px",border:"dashed 10px black",backgroundColor:"blue"}} src={el.image} alt="image" />
                <button onClick={()=> handlePrice(el.brand,el.price)}>show price </button>
            </dir>
        ))
       }
    </div>
  )
}
voiture.propTypes = {
  car:PropTypes.array,
  handlePrice:PropTypes.func
}
voiture.defaultProps={
  name:"aziz"
}
export default Voiture