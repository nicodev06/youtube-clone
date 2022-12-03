import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelDetail from './ChannelDetail';
import Videos from './Videos';


const Channel = () => {
  
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => {setChannelDetail(data?.items[0])});
    
        fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
        .then((data) => {setVideos(data?.items)});
  }, [id])

  return (
    <Box minHeight="95vh">
        <Box>
            <div style={{
                background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(39,45,142,1) 38%, rgba(0,212,255,1) 100%)',
                zIndex: 10,
                height: '300px'
            }}/>
            <ChannelDetail channelDetail={channelDetail} marginTop='-110px'></ChannelDetail>
        </Box>
        <Box display="flex" p="2">
            <Box sx={{mr: {sm: '100px'}}}/>
                <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default Channel