import React, { useEffect, useState } from 'react'
import { Pokedate, getPokemonById, getIdFromName } from '../public/pokedata.js'
import styles from '../styles/styles.module.css'
import Nav from './link'
const PokemonInfo = ({ id, title }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await response.json()
        setPokemonData(data)

        const pokemonInfo = getPokemonById(id)
        setData(pokemonInfo)
      } catch (error) {
        console.error('Error fetching Pokemon information:', error)
      }
    }

    fetchPokemonInfo()
  }, [id])

  return (
    <div className={styles.h2}>
      {pokemonData && (
        <div>
          <h2>名前: {data.name}</h2>
          <h3>図鑑番号: {id}</h3>
          <img
            className={styles.img}
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p>身長: {(pokemonData.height * 0.1).toFixed(1)} ｍ</p>
          <p>体重: {(pokemonData.weight * 0.1).toFixed(1)} kg</p>
          <p>タイプ1 : {data.type1}</p>
          {data.type2 && (
            <div>
              <p>タイプ2 : {data.type2}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Home = () => {
  const [pId, setPokemonId] = useState('')
  const pokemonId = getIdFromName(pId)

  const Search = () => {
    const pokemonId = getIdFromName(pId)
    if (pokemonId) {
      setPokemonId(pokemonId)
      window.location.href = `/pokemon/${pokemonId}`
    } else {
      alert('Please enter a valid Pokemon name.')
    }
  }

  return (
    <div className={styles.h2}>
      <h1>ポケモン 全国図鑑</h1>
      <div>
        <label>
          <Nav />
          名前:
          <input
            type='text'
            value={pId}
            onChange={e => setPokemonId(e.target.value)}
          />
        </label>
      </div>
      {pokemonId && (
        <PokemonInfo id={pokemonId} title={`Pokemon ${pokemonId}`} />
      )}
    </div>
  )
}

export default Home
