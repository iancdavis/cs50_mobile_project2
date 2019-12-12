import {OMDB_API_KEY} from 'react-native-dotenv'

export const fetchMovies = async (searchTerm) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchTerm}`)
        const results = await response.json()
        return results.Search
    } catch (err) {
        const errMessage = err.message
        return errMessage
    }

}

export const fetchMovieDetails = async (searchTerm) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${searchTerm}`)
        const results = await response.json()
        console.log(results)
        return results
    } catch (err) {
        const errMessage = err.message
        return errMessage
    }

}
