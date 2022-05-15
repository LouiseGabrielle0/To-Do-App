import { Heading } from '@chakra-ui/react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {


  //this is taking the todo list from the local storage, if there is nothing in the local storage it sends and empty array
    const [toDos, setToDos] = useState(
      () => JSON.parse(localStorage.getItem('todos')) || []);
// this is running is as a function so it only looks when the page is loaded


    useEffect  (() => {
localStorage.setItem('todos', JSON.stringify(toDos)) //converting the JS Object (todos) into a JSON string
    }, [toDos]) // this will only run when the todos are changed 

  function deleteToDo(id) {
    const newToDos = toDos.filter(todo => {
      return todo.id !== id;
    });
    setToDos(newToDos);
  }

  function addNewToDo(todo){
    setToDos([...toDos,todo])
  }

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun/> : <FaMoon/>}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="bold"
        fontSize="x-large"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        To Do List
      </Heading>
      <ToDoList toDos={toDos} deleteToDo={deleteToDo}  />
      <AddToDo addNewToDo={addNewToDo} />
    </VStack>
  );
}

export default App;
