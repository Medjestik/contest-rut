import './Video.css';

const Video = () => {
  return (
    <div className='h-video'>
      <video
        src='https://course.emiit.ru/webtutor/ivan/video.mp4'
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
