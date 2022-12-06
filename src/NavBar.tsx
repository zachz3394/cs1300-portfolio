import { Link } from 'react-router-dom';
import { Flex, HStack, Text } from '@chakra-ui/react';

const c = {
  textColor: 'black',
}

const NavBar = () => {
  return (
    <Flex
      height='80px'
      align='center'
      justify='space-between'
      padding='0px 36px'
    >
      <Text as={Link} to='/'>
        Intrepid Panda
      </Text>
      <HStack spacing='48px'>
        <Text color={c.textColor} as={Link} to='/uiux/personas-storyboarding'>
          Portfolio
        </Text>
        <Text as={Link} to='/uiux/personas-storyboarding'>
          Research
        </Text>
        <Text as={Link} to='/uiux/responsive-redesign'>
          About
        </Text>
      </HStack>
    </Flex>
  );
}

export default NavBar;
