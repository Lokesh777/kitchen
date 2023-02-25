import {
    Heading,
    Box,
    Center,
    Text,
    Circle,
    
  } from '@chakra-ui/react';
  
  export default function InfoCard(props) {
    const {text,title,pic}=props
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Circle
            size={20}
            textAlign={'center'}
            mb={4}
            pos={'relative'}
            bg="rgba(52, 38, 121, 0.7)"
           marginLeft={20}
        

          >
            {pic}
          </Circle>
          <Heading 
          marginRight={10}
          fontSize={10} mb={4} fontFamily={'body'}>
            {title}
          </Heading>
          <Text 
          marginRight={10}
          fontWeight={500} fontSize={10} color={'gray.500'} mb={4}>
            {text}
          </Text>        
  
          {/* <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
          </Stack> */}
        </Box>
      </Center>
    );
  }