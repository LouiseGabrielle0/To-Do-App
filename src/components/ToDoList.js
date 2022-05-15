import React from 'react';
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

function ToDoList() {
  const toDos = [
    { id: 1, body: 'get bread' },
    { id: 2, body: 'get butter' },
    { id: 3, body: 'get nutella' },
  ];

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
            <IconButton icon={<FaTrash />} isRound={true} />
          </HStack>
        );
      })}
    </VStack>
  );
}

export default ToDoList;
