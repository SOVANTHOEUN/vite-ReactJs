import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import "./index.css";

interface VideoItem {
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    };
  };
}

const VideoEmbedApp: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const API_KEY = "AIzaSyC23HlvbxW5T0gKUua1TyvvQ_HmqoCO3NY";
  const CHANNEL_NAME = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";

  useEffect(() => {
    const fetchChannelId = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/channels",
          {
            params: {
              part: "contentDetails",
              forUsername: CHANNEL_NAME,
              key: API_KEY,
            },
          }
        );

        const uploadsPlaylistId =
          response.data.items[0].contentDetails.relatedPlaylists.uploads;

        const fetchVideos = async () => {
          try {
            const playlistResponse = await axios.get(
              "https://www.googleapis.com/youtube/v3/playlistItems",
              {
                params: {
                  part: "snippet",
                  playlistId: uploadsPlaylistId,
                  maxResults: 5,
                  key: API_KEY,
                },
              }
            );

            const videoData: VideoItem[] = playlistResponse.data.items;
            setVideos(videoData);
          } catch (error) {
            console.error("Error fetching videos:", error);
          } finally {
            setTimeout(() => {
              setIsLoading(false);
            }, 4000);
          }
        };

        fetchVideos();
      } catch (error) {
        console.error("Error fetching channel ID:", error);
        setIsLoading(false);
      }
    };

    fetchChannelId();
  }, []);

  return (
    <div className="app-container">
      <h1>Last 5 Videos</h1>
      <div className="video-container">
        {isLoading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          videos.map((video) => (
            <div key={video.snippet.resourceId.videoId} className="video-item">
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoEmbedApp;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ChannelInfo = () => {
//   const [channelData, setChannelData] = useState({});
//   const API_KEY = "AIzaSyC23HlvbxW5T0gKUua1TyvvQ_HmqoCO3NY";
//   const CHANNEL_NAME = "InfoFutHD"; // Replace with the channel name or custom URL identifier

//   useEffect(() => {
//     const fetchChannelInfo = async () => {
//       try {
//         const response = await axios.get(
//           "https://www.googleapis.com/youtube/v3/channels",
//           {
//             params: {
//               part: "id",
//               forUsername: CHANNEL_NAME,
//               key: API_KEY,
//             },
//           }
//         );

//         setChannelData(response.data.items[0]);
//       } catch (error) {
//         console.error("Error fetching channel info:", error);
//       }
//     };

//     fetchChannelInfo();
//   }, []);

//   return (
//     <div>
//       <h1>Channel Info</h1>
//       <pre>{JSON.stringify(channelData, null, 2)}</pre>
//     </div>
//   );
// };

// export default ChannelInfo;
