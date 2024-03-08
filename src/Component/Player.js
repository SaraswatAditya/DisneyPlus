import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const Player = () => {
  const [playing, setPlaying] = useState(true);
  const [detailData, setDetailData] = useState({});

  const { id } = useParams();
  // console.log("url ", id);
  // console.log("data  ", detailData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
          if (doc.id === id) {
            setDetailData(doc.data());
          }
        });
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {/* Conditionally render the ReactPlayer component */}
      {playing && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ReactPlayer
            url={detailData.url}
            playing={playing}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default Player;
