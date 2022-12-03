import { Stack, Box } from '@mui/material';
import  VideoCard  from './VideoCard';
import  ChannelDetail  from './ChannelDetail';


const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  
  return (
    <Stack 
    direction={direction || "row"}
    flexWrap="wrap"
    justifyContent="start"
    gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id?.videoId && <VideoCard video={item}/>}
          {item.id?.channelId && <ChannelDetail channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos