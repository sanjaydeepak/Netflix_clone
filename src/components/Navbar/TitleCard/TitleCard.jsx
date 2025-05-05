import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import { Link } from "react-router-dom";

const API_KEY = "bb3218c68c664cefc5a09dbf984a2f9d"; // Your TMDB API key
const BASE_URL = "https://api.themoviedb.org/3/";

const TitleCard = ({ title, category, genreId }) => {
  const [movies, setMovies] = useState([]);
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `${BASE_URL}movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;

      // If genreId is provided, use the discover endpoint to filter by genre
      if (genreId) {
        url = `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreId}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        } else {
          console.error("No results found for:", title);
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category, genreId, title]); // Added `title` as dependency

  const handleScroll = (event) => {
    event.preventDefault();
    if (cardRef.current) {
      cardRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener("wheel", handleScroll);
    }
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className="titleCard">
      <h2>{title}</h2>
      <div className="card-list" ref={cardRef}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/player/${movie.id}`} key={movie.id} className="card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x300?text=No+Image"
                }
                alt={movie.title || "No Title"}
              />
              <p>{movie.title || "No Title Available"}</p>
            </Link>
          ))
        ) : (
          <p className="error-msg">No movies available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default TitleCard;
