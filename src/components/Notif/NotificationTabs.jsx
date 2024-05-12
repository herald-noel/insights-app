import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import NotificationCards from './NotificationCards';

const NotificationTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const url = '/posts/all'

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
          <Tab label="Posts" />
          <Tab label="Responses" />
        </Tabs>
      </Box>
      <Box sx={{ p: 3 }}>
        {value === 0 && (
          <Typography variant="body1">
            <NotificationCards url={url}/>
          </Typography>
        )}
        {value === 1 && (
          <Typography variant="body1">
            This is the Responses tab content.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default NotificationTabs;