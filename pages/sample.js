import React from 'react'
import { getPokemonById } from './pokedate'

export default function Asd () {
  const pokemon = getPokemonById(id)

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>Type 1: {pokemon.type1}</p>
      {pokemon.type2 && <p>Type 2: {pokemon.type2}</p>}
    </div>
  )
}
