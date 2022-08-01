import { useState, useEffect } from "react"

const App = () => {
    //state
    const [pokemon, setPokemon] = useState(null)

    //componentDidMount
    // useEffect(() => {}, [])

    //componentDidUpdate
    useEffect(() => {
        fetchData()
    }, [pokemon])

    //methodes
    const fetchData = async () => {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/893")
        const response = await request.json()
        setPokemon(response)
    }
    // console.log(pokemon.sprites)
    //render
    if (!pokemon) {
        return <div>chargement</div>
        //benoit WTF !!!!
    }
    return (
        <main>
            <img src={pokemon.sprites.front_shiny} /> <br />
            <span>{pokemon.name}</span> <br />
            <span>{pokemon.height} kg</span> <br />
            <span>{pokemon.weight} cm</span> <br />
            {pokemon.types.map((type) => {
                return (
                    <>
                        <span>{type.type.name}</span>
                        <br />
                    </>
                )
            })}
        </main>
    )
}

export default App
