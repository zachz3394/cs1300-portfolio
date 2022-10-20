import AppRouter from './AppRouter';
import NavBar from './NavBar';
import { useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const c = {
  sidebarOpenWidth: 250,
  sidebarClosedWidth: 64,
}

export default function App() {
  const disclosureProps = useDisclosure();
  const [ mobileScreen ] = useMediaQuery('(max-width: 600px');

  const getSideBar = () => {
    if (!mobileScreen) {
      return (
        <motion.div
          initial={false}
          animate={{ width: disclosureProps.isOpen ? c.sidebarOpenWidth : c.sidebarClosedWidth }}
          transition={{type: 'tween'}}
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'fixed',
            zIndex: 2,
            left: '0',
            height: '100vh',
            top: '0',
          }}
        >
          <NavBar disclosureProps={disclosureProps}/>
        </motion.div>
      );
    } else {
      return(<div></div>);
    }
  }

  const getMainApp = () => {
    if (!mobileScreen) {
      return (
        <motion.div
          initial={false}
          animate={{ left: disclosureProps.isOpen ? c.sidebarOpenWidth : c.sidebarClosedWidth }}
          transition={{type: 'tween'}}
          style={{
            position: 'absolute',
          }}
        >
          <AppRouter />
        </motion.div>
      );
    } else {
      return (
        <AppRouter />
      );
    }
  }

  return (
    <div>
      {getSideBar()}
      {getMainApp()}
    </div>
  );
}
