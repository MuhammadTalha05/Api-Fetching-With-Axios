import React, { useContext, useEffect, useState } from 'react'
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail'
import VideosContext from '../../../context/VideosContext'
import useVideos from '../../hooks/useVideo'
import axios from 'axios'
import useVideoDispatch from '../../hooks/useVideoDispatch'

const VideoList = ({editVideo}) => {

  // const video = useContext(VideosContext)

  // const [video, setVideo] = useState([])

  const URL = 'https://my.api.mockaroo.com/video.json?key=cc5772c0';

  const videoDispatch = useVideoDispatch()

  const handleAddVideo = async ()=>{
    let res = await axios.get(URL);
    videoDispatch({type:'LOAD', payload:res.data});
  } 

  useEffect(()=>{
    handleAddVideo();
  },[])
  const video = useVideos();
  return (
    <>
    <div className='flex'>
      {
        video?.map((val, index)=>{
          return(
            <div key={index}>
              <VideoThumbnail {...val} editVideo={editVideo}></VideoThumbnail>
            </div>
          )
        })
      }
      
    </div>
    {/* <button style={{backgorundColor: "black"}} onClick={handleAddVideo}>Add Video</button> */}
    </>
  )
}

export default VideoList