import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const [info, setInfo] = useState ({})
  const params = useParams()
  console.log (params)

  useEffect =(()=> {
    axios ('https://jsonplaceholder.typicode.com/users/')
    .then(res =>setInfo (res.data))
    .catch (error => console.log(error))
  }, []
  )
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        <h3>{info.name}</h3>
        <h4>{info.email}</h4>
        <h4>{info.phone}</h4>
        <h4>{info.website}</h4>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail