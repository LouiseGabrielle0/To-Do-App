import React from 'react';
import { VStack, HStack, Text, IconButton } from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa'


function ToDoList() {
  const toDos = [
    { id: 1, body: 'get bread' },
    { id: 2, body: 'get butter' },
    { id: 3, body: 'get nutella' },
  ];

  return (
  <VStack>
        {toDos.map(todos => {
            return (
                <HStack>
                <Text>{todos.body}</Text>
                <IconButton icon={<FaTrash/>}/>
                </HStack>
            )
        })}
  </VStack>
  )
}

export default ToDoList;
