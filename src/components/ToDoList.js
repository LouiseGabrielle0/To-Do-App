import React from 'react';
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function ToDoList({toDos, deleteToDo}) {

    if(!toDos.length){
        return(
            <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
                No To Dos, Yey
            </Badge>
        )

    }


  return (
     <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {toDos.map(toDos => {
        return (
          <HStack key={toDos.id}>
            <Text>{toDos.body}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} isRound={true} onClick={() => deleteToDo(toDos.id)} />
          </HStack>
        );
      })}
    </VStack>
  );
}

export default ToDoList;
