import React, { useEffect, useState } from 'react'
import { getPokemonById } from './pokedate'

const PokemonInfo = ({ id, title }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        setPokemonData(data)

        const pokemonInfo = await getPokemonById(pokemonId)
        setData(pokemonInfo)
      } catch (error) {
        console.error('Error fetching Pokemon information:', error)
      }
    }

    fetchPokemonInfo()
  }, [id])

  return (
    <div>
      <h2>{title}</h2>
      {pokemonData && (
        <div>
          <p>Name: {pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height} decimetres</p>
          <p>Weight: {pokemonData.weight} hectograms</p>
          {data && (
            <div>
              <p>type1 : {data.type1}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Home = () => {
  const [pokemonId, setPokemonId] = useState('')

  const Search = () => {
    const parsedId = parseInt(pokemonId)
    if (!isNaN(parsedId) && parsedId > 0) {
      setPokemonId(parsedId)
      window.location.href = `/pokemon/${parsedId}`
    } else {
      alert('Please enter a valid Pokemon ID.')
    }
  }

  return (
    <div>
      <h1>ポケモン 全国図鑑</h1>
      <div>
        <label>
          図鑑番号:
          <input
            type='text'
            value={pokemonId}
            onChange={e => setPokemonId(e.target.value)}
          />
        </label>
        <button onClick={Search}>検索</button>
      </div>
      {pokemonId && (
        <PokemonInfo id={pokemonId} title={`Pokemon ${pokemonId}`} />
      )}
    </div>
  )
}

export default Home
