import React from "react";
import ReactPlayer from "react-player";

const MyComponent = () => {
  const demo = "../../video/demo.mp4";
  return (
    <div className="space-y-8 px-36">
      <h1 className="text-5xl font-[Monument] text-center">
        Demo Video
      </h1>
      <ReactPlayer url={demo} controls playing muted loop width="100%" height="100%" />
    </div>
  );
};

export default MyComponent;
