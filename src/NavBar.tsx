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
  listLeft: '36px',
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
        icon={disclosureProps.isOpen ? <CloseIcon w={6} h={6}/> : <HamburgerIcon w={8} h={8}/>}
        variant='link'
        style={{
          height: '64px',
          width: '64px',
          margin: '8px',
        }}
        color={c.textColor}
        {...disclosureProps.getButtonProps()}
      />
      <motion.nav
        initial={false}
        animate={{ left: disclosureProps.isOpen ? c.listLeft : '-200px' }}
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
              {/* <ListItem color={c.textColor}>
                <Text as={Link} to='/about'>
                  About
                </Text>
              </ListItem>
              <ListItem color={c.textColor}>
                <Text as={Link} to='/work'>
                  Work
                </Text>
              </ListItem> */}
              <ListItem color={c.textColor}>
                <Text as={Link} to='/uiux/personas-storyboarding'>
                  Personas and Storyboarding
                </Text>
              </ListItem>
              <ListItem color={c.textColor}>
                <Text as={Link} to='/uiux/responsive-redesign'>
                  Responsive Redesign
                </Text>
              </ListItem>
          </List>
      </motion.nav>
    </Box>
  );
}

export default NavBar;
