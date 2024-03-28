import React from 'react'
import Card from '../Components/Card'
import { useEffect,useState } from 'react'
import axios from "axios"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentista, setDentista] = useState ([])

  useEffect(()=> {
    axios('https://jsonplaceholder.typicode.com/users/')
    .then (res => setDentista(res.data))
  },[] )


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentista.map((info) => <Card key={info.id} item={info}/>)}
      </div>
    </main>
  )
}

export default Home