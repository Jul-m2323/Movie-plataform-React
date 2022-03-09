import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if (vote >= 7) {
        return "green";
    } else if (vote >= 4) {
        return "yellow";
    } else {
        return "red";
    }
}

const Movies = ({title, poster_path, overview, vote_average}) => {
    return(
    <div className="movie">
        <div className="movie-header">
            <img src={poster_path ? (IMG_API +  poster_path): 
            'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}
             alt={title} />   
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>overview</h2>
                <p>{overview}</p>
            </div>
        </div>     
    </div>
    );
}

export default Movies;