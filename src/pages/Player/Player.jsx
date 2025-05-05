import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams(); // movie ID from the URL params
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const [loading, setLoading] = useState(true); // Loading state

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjMyMThjNjhjNjY0Y2VmYzVhMDlkYmY5ODRhMmY5ZCIsIm5iZiI6MTc0Mjc1MDA0OC43NDg5OTk4LCJzdWIiOiI2N2UwNDE2MGI4ZTBmZWE5MzQwN2Y3N2IiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eXlGozVGIcuNrONJqGuOa4yDJOgpiYDFiLXqg_5cF_A",
    },
  };

  useEffect(() => {
    const fetchTrailerData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        }
      } catch (err) {
        console.error("Error fetching trailer data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailerData();
  }, [id]); // Add id as dependency to refetch when movie changes

  return (
    <div className="player">
      <button onClick={() => navigate(-1)} className="back-button">
        <img src={back_arrow_icon} alt="Back" />
      </button>

      {loading ? (
        <p>Loading...</p> // Show a loading message or spinner while data is being fetched
      ) : apiData.key ? (
        <div className="video-container">
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>No trailer available for this movie.</p> // Fallback if no trailer is available
      )}

      <div className="player_info">
        <p>
          <strong>Published on:</strong> {apiData.published_at}
        </p>
        <p>
          <strong>Trailer Name:</strong> {apiData.name}
        </p>
        <p>
          <strong>Type:</strong> {apiData.type}
        </p>
      </div>
    </div>
  );
};

export default Player;
