import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./characters.css"

const Characters = () => {

  const [name, setName] = useState("")
  const navigate = useNavigate()

  const navegar = (e) => {
    e.preventDefault();
    navigate(`/character/${name}`)
  }

  return (
    <>
      <h1>CHARACTERS</h1>
      <form onSubmit={navegar} className="formCharacter">
        <label htmlFor='name'> Personaje: </label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
        <button type="submit">Buscar</button>
      </form>
    </>
)
}

export default Characters