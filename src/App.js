import { useState, useEffect } from "react"

const App = () => {
    //state
    const [pokemon, setPokemon] = useState(null)
    const [randomId, setRandomId] = useState(1)

    //componentDidMount
    // useEffect(() => {}, [])

    //componentDidUpdate
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [randomId])

    //methodes
    const fetchData = async () => {
        const request = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        )
        const response = await request.json()
        setPokemon(response)
    }
    const generateRandomId = () => {
        const random = Math.floor(Math.random() * 151) + 1
        setRandomId(random)
    }
    //render
    if (pokemon === null) {
        return (
            <div>
                <p>Loading..</p>
                <button onClick={generateRandomId}>
                    Show a random Pokemon
                </button>
            </div>
        )
    }
    return (
        <main>
            <img src={pokemon.sprites.front_shiny} alt="pokemon" />
            <h1>{pokemon.name}</h1>
            <p>{pokemon.height} kg</p>
            <p>{pokemon.weight} cm</p>
            <ul>
                {pokemon.types.map((type) => {
                    return (
                        <>
                            <li key={pokemon.forms}>{type.type.name}</li>
                        </>
                    )
                })}
            </ul>
            <button onClick={generateRandomId}>Show a random Pokemon</button>
        </main>
    )
}

export default App
