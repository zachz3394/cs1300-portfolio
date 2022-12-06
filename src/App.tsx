import AppRouter from './AppRouter';
import NavBar from './NavBar';
import { Box } from '@chakra-ui/react';

export default function App() {

  return (
    <Box
      width='100vw'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Box
        width='100%'
        maxWidth='1200px'
      >
        <NavBar />
        <AppRouter />
      </Box>
    </Box>
  );
}
