import { useState } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';

const UpdateMovieModal = ({
  isOpen,
  onClose,
  initialName,
  initialYear,
  initialPoster,
  initialPlot,
  initialProducer,
  initialActors,
  handleUpdate,
}) => {
  const [name, setName] = useState(initialName);
  const [year, setYear] = useState(initialYear);
  const [poster, setPoster] = useState(initialPoster);
  const [plot, setPlot] = useState(initialPlot);
  const [producerName, setProducerName] = useState(initialProducer);
  const [actors, setActors] = useState(initialActors);

  const handleNameChange = (event) => setName(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  const handlePosterChange = (event) => setPoster(event.target.value);
  const handlePlotChange = (event) => setPlot(event.target.value);
  const handleProducerChange = (event) => setProducerName(event.target.value);
  const handleActorsChange = (event) => setActors(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate({
      name,
      year,
      poster,
      plot,
      producerName,
      actors,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Update Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={handleNameChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Year</FormLabel>
              <Input type="number" value={year} onChange={handleYearChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Poster URL</FormLabel>
              <Input type="text" value={poster} onChange={handlePosterChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Plot</FormLabel>
              <Textarea value={plot} onChange={handlePlotChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Producer</FormLabel>
              <Input type="text" value={producerName} onChange={handleProducerChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Actors</FormLabel>
              <Input type="text" value={actors} onChange={handleActorsChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UpdateMovieModal;
