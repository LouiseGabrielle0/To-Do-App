import {Heading} from '@chakra-ui/react';
import ToDoList from './components/ToDoList';
import AddToDo  from './components/AddToDo';
import { VStack, IconButton } from '@chakra-ui/react';
import {FaSun} from 'react-icons/fa'




function App() {
  return (
    <VStack p={4}>
    <IconButton icon={<FaSun/>} isRound='true' size='lg' alignSelf='flex-end'/>
      <Heading mb='8' fontWeight='bold' fontSize='x-large' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>To Do List</Heading>
      <ToDoList/>
      <AddToDo/>
    </VStack>
  );
}

export default App;
