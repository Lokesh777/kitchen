import { useState,useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  
} from '@chakra-ui/react';
import axios from 'axios';
import UpdateMovieModal from './UpdateMovieModal';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [movieToUpdate, setMovieToUpdate] = useState(null);
    const [formValues, setFormValues] = useState({
      name: "",
      year: "",
      poster: "",
      plot: "",
      producerName: "",
      actors: [],
    });
  
    const fetchMovies = async () => {
      const response = await axios.get("https://jobportal-jhuf.onrender.com/user/movies");
      setMovies(response.data);
    };
  
    const handleDelete = async (id) => {
      await axios.delete(`https://jobportal-jhuf.onrender.com/user/movies/${id}`);
      fetchMovies();
    };
  
    const handleUpdate = (id) => {
      const movie = movies.find((m) => m._id === id);
      setMovieToUpdate(movie);
      setShowUpdateModal(true);
      setFormValues({
        name: movie.name,
        year: movie.year,
        poster: movie.poster,
        plot: movie.plot,
        producerName: movie.producerName,
        actors: movie.actors.map((actor) => actor.name).join(", "),
      });
    };
  
    const handleFormChange = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, year, poster, plot, producerName, actors } = formValues;
      const movieData = {
        name,
        year,
        poster,
        plot,
        producerName,
        actors: actors.split(",").map((actor) => ({ name: actor.trim() })),
      };
      await axios.put(
        `https://jobportal-jhuf.onrender.com/user/movies/${movieToUpdate._id}`,
        movieData
      );
      setShowUpdateModal(false);
      fetchMovies();
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    return (
      <Box>
        <Heading as="h1" size="xl" mb="4">
          Movies
        </Heading>
        <Stack
          spacing="4"
          display={"grid"}
          gridTemplateColumns={"repeat(2,1fr)"}
          gap={"2rem"}
        >
          {movies.map((movie) => (
            <Box key={movie._id} borderWidth="1px" rounded="md" p="4">
              <Heading as="h2" size="md">
                {movie.name} ({movie.year})
              </Heading>
              <Text>poster_Url: {movie.poster}</Text>
              <Text>Plot: {movie.plot}</Text>
              <Text>Producer: {movie.producerName}</Text>
              <Text>
                Actors: {movie.actors.map((actor) => actor.name).join(", ")}
              </Text>
              <Flex justifyContent={"space-evenly"}>
                <Button onClick={() => handleDelete(movie._id)}>Delete</Button>
                <Button onClick={() => handleUpdate(movie._id)}>Edit</Button>
              </Flex>
            </Box>
          ))}
        </Stack>
        <UpdateMovieModal
          isOpen={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          initialName={formValues.name}
          initialYear={formValues.year}
          initialPoster={formValues.poster}
          initialPlot={formValues.plot}
          initialProducer={formValues.producerName}
          initialActors={formValues.actors}
          handleUpdate={handleSubmit}
        />
      </Box>
    );
  };
  
  export default Movies
  