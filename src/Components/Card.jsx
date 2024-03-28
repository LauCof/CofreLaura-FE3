import React from "react";
import {Link} from 'react-router-dom'

const Card = ({item}) => {
const {user, username} = item
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src='./images/doctor.jpg' alt="dentista" />
        <h3>{user}</h3>
        <h4>{username}</h4>
        <Link to={'/detail/' + item.id}>Ver</Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
