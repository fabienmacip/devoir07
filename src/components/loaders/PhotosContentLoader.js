import React from 'react';

import {Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


const PhotosContentLoader = () => {
  return(
      <Box>
        <Skeleton variant="rect" width={210} height={118} />
        <Skeleton width="60%" />
        <Skeleton />
      </Box>
  );
};

export default PhotosContentLoader;