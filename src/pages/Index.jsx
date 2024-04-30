import { Box, Flex, Text, Button, useColorModeValue, Image } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Index = () => {
  const bg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const color = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgGradient="linear(to-br, gray.800, blackAlpha.900)"
      p={5}
    >
      <Box
        maxW="lg"
        w="full"
        bg={bg}
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
        backdropFilter="blur(10px)"
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/images/verbatim-logo.png"
          alt="Verbatim Logo"
          m="auto"
          mb={4}
        />
        <Text fontSize="2xl" fontWeight="bold" color={color}>
          Welcome to Verbatim
        </Text>
        <Text mt={4} color={color}>
          Connect with the world around you on Verbatim.
        </Text>
        <Flex mt={8} justify="center" gap={4}>
          <Button colorScheme="blue" leftIcon={<FaFacebook />}>
            Facebook
          </Button>
          <Button colorScheme="teal" leftIcon={<FaTwitter />}>
            Twitter
          </Button>
          <Button colorScheme="pink" leftIcon={<FaInstagram />}>
            Instagram
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;