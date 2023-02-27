import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Box, Textarea, Button, VStack, Heading } from '@chakra-ui/react';
import axios from 'axios';

const AddMovie = ({onSubmit }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [plot, setPlot] = useState('');
  const [poster, setPoster] = useState('');
  const [producerName, setProducerName] = useState('');
  const [actorNames, setActorNames] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actors = actorNames.split(',').map((name) => name.trim());

    try {
      const response = await axios.post('https://jobportal-jhuf.onrender.com/user/movies', {
        name,
        year,
        plot,
        poster,
        producerName,
        actorNames: actors,
      });

      console.log('Movie added:', response.data);

      setName('');
      setYear('');
      setPlot('');
      setPoster('');
      setProducerName('');
      setActorNames('');

    //   onSubmit(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box border={"2px solid gray"} p={"3rem"} borderRadius={"2rem"}  maxW="md" mx="auto" mt="8">
       <Heading marginBottom={"2rem"} > Add the Novies Data</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Year</FormLabel>
            <Input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Plot</FormLabel>
            <Textarea value={plot} onChange={(e) => setPlot(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Poster URL</FormLabel>
            <Input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Producer Name</FormLabel>
            <Input type="text" value={producerName} onChange={(e) => setProducerName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Actor Names (comma-separated)</FormLabel>
            <Textarea value={actorNames} onChange={(e) => setActorNames(e.target.value)} />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Add Movie
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddMovie;
