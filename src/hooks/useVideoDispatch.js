import React, {useContext } from 'react'
import VideoDispatch from '../../context/VideoDispatch'


const useVideoDispatch = () => {
  return useContext(VideoDispatch)
}

export default useVideoDispatch