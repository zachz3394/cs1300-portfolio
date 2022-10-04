import { Link } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, List, ListItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface NavBarProps {
  disclosureProps: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
    isControlled: boolean;
    getButtonProps: (props?: any) => any;
    getDisclosureProps: (props?: any) => any;
  },
}

const c = {
  listLeft: 80,
  bgColor: 'teal',
  textColor: 'white',
  listSpacing: 8,
}

const NavBar = (props: NavBarProps) => {
  const { disclosureProps } = props;

  return (
    <Box
      bg={c.bgColor}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <IconButton
        aria-label='Menu'
        icon={disclosureProps.isOpen ? <CloseIcon/> : <HamburgerIcon/>}
        variant='link'
        size={disclosureProps.isOpen ? 'md' : 'lg'}
        style={{
          height: '50px',
          width: '50px',
        }}
        color={c.textColor}
        {...disclosureProps.getButtonProps()}
      />
      <motion.nav
        initial={false}
        animate={{ left: disclosureProps.isOpen ? c.listLeft : -c.listLeft }}
        transition={{type: 'tween'}}
        style={{
          top: '200px',
          position: 'absolute',
        }}
      >
          <List
            id="navigation"
            spacing={c.listSpacing}
            >
              <ListItem color={c.textColor}>
                <Text as={Link} to='/'>
                  Home
                </Text>
              </ListItem>
              <ListItem color={c.textColor}>
                <Text as={Link} to='/about'>
                  About
                </Text>
              </ListItem>
              <ListItem color={c.textColor}>
                <Text as={Link} to='/work'>
                  Work
                </Text>
              </ListItem>
          </List>
      </motion.nav>
    </Box>
  );
}

export default NavBar;
