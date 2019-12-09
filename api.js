import {OMDB_API_KEY} from 'react-native-dotenv'

 export const fetchMovies = async () => {
     try {
        console.log(OMDB_API_KEY)
        const response = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=avengers`)
        const results = await response.json()
        console.log(results)
     } catch (err) {
         const errMessage = err.message
         console.log(errMessage)
     }
    
  }
