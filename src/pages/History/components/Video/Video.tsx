import video from '../../../../shared/video/video.mp4';

import './Video.css';

const Video = () => {
  return (
    <div className='h-video'>
      <video
        src={video}
        autoPlay
        loop
        muted
        controls
        playsInline
        className='h-video__element'
      />
    </div>
  );
};

export default Video;
