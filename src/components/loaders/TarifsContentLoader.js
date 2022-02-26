import React from 'react';

import {Box} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


const TarifsContentLoader = () => {
  return(
      <Box>
        <Skeleton variant="rect" width={40} height={30} />
        <Skeleton width="60%" />
        <Skeleton />
      </Box>
  );
};

export default TarifsContentLoader;