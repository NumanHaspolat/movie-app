import React from "react";

const VideoSection = ({ videoKey }) => {
  return (
    <div>
      <div className="video-div">
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          allowFullScreen
          title="YouTube video"
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>
    </div>
  );
};

export default VideoSection;
