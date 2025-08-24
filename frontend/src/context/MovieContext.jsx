import { createContext, useState, useContext, useEffect } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    const addToFavs = (movie) => {
        setFavourites(prev => [...prev, movie]) //updating state
    }

    const removeFromFavs = (movieId) => {
        setFavourites(prev => prev.filter( movie => movie.id !== movieId)) //removing from favourites by filtering out non-mathicng movie ids
    }

    const isFavourite = (movieId) => {
        return favourites.some( movie => movie.id === movieId)
    }

    const value = {
        favourites,
        addToFavs,
        removeFromFavs,
        isFavourite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}