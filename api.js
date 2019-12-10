import {OMDB_API_KEY} from 'react-native-dotenv'

export const fetchMovies = async (searchTerm) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchTerm}`)
        const results = await response.json()
        console.log(results.Search)
        return results.Search
    } catch (err) {
        const errMessage = err.message
        console.log(errMessage)
        return errMessage
    }

}
