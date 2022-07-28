
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" sx={{marginTop: 5 , color:
           'rgba(255, 255, 255, 1)', padding: '15px 50px',border:'2px solid #FFFFFF', background: 'linear-gradient(92.3deg, rgba(255, 255, 255, 0.7) 1.85%, rgba(255, 255, 255, 0.3) 100%)'}}>SHOP NEW ARRIVALS</Button>
    </Stack>
  );
}


