import React from 'react'
import "./RowPost.css"
import { useEffect } from 'react'
import axios from '../../Axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import { useState } from 'react'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [youtubeId, setYoutubeId] = useState('')
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${props.url}`).then((response) => {
            setMovies(response.data.results)
            console.log(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            if(response.data.results.length !==0){
                setYoutubeId(response.data.results[0].key)
            }else{
                console.log('no trailer found..!!!')
            }

        })

    }
 
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((movie) => {
                        return (
                            <img onClick={() => handleMovie(movie.id)} className={props.isSmall ? 'small-poster' : 'poster'} src={`${movie ? imageUrl + movie.backdrop_path : ''}`} alt="row-psters" />

                        )
                    })
                }
            </div>
           { youtubeId && < YouTube videoId ={youtubeId} opts={opts} />}
        </div>
    )
}

export default RowPost