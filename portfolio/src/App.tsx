import AppRouter from './AppRouter';
import NavBar from './NavBar';
import { useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function App() {
  const disclosureProps = useDisclosure();

  return (
    <div>
      <motion.div
        initial={false}
        animate={{ width: disclosureProps.isOpen ? 250 : 50 }}
        transition={{type: 'tween'}}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'fixed',
          left: '0',
          height: '100vh',
          top: '0',
        }}
      >
        <NavBar disclosureProps={disclosureProps}/>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ left: disclosureProps.isOpen ? 250 : 50 }}
        transition={{type: 'tween'}}
        style={{
          position: 'absolute',
        }}
      >
        <AppRouter />
      </motion.div>
    </div>
  );
}
