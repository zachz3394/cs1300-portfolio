import { Button, Center, HStack, Text, VStack } from '@chakra-ui/react';

function Home() {
  return (
    <Center
      padding='48px 48px 0px'
    >
      <VStack
        align='flex-start'
        spacing='32px'
      >
        <VStack
          align='flex-start'
          spacing='16px'
        >
          <Text fontSize='3xl'>
            This is Intrepid Panda
          </Text>
          <Text>
            I am a web and UX designer focused on making simple yet effective interfaces
          </Text>
        </VStack>
        <HStack spacing='24px'>
          <Button colorScheme='gray'>
            LinkedIn
          </Button>
          <Button colorScheme='gray'>
            GitHub
          </Button>
          <Button colorScheme='gray'>
            Resume
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}

export default Home;
