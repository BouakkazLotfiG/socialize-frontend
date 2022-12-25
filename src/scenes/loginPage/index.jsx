import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './Form';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  return (
    <Box>
      <Box
        width='100%'
        backgroundColor={theme.palette.background.alt}
        p='1rem 6%'
        textAlign='center'
      >
        <Typography fontWeight='bold' fontSize='32px' color='primary'>
          Sociolize
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '35%' : '93%'}
        p='3rem'
        m='2rem auto'
        borderRadius='1.5rem'
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          textAlign='center'
          paddingTop='3rem'
          paddingBottom='3rem'
          fontWeight='bold'
          fontSize='50px'
          color='primary'
        >
          Sociolize
        </Typography>
        <Typography fontWeight='500' variant='h5' sx={{ mb: '1.5rem' }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
