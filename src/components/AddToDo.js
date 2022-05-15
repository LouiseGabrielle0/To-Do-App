import { HStack, Input, Button, useToast} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';


function AddToDo({ addNewToDo }) {

    const toast = useToast()

  const [content, setContent] = useState(' ');

  function handleSubmit(e) {
    e.preventDefault();

    if(!content) {
        toast({
            title: 'No To Do!!',
            description: "Please add a To Do to the list",
            status: 'error',
            duration: 2000,
            isClosable: true,
        })
        return
    }
    const todo = {
      id: nanoid(),
      body: content,
    };
    addNewToDo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add a To Do here"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add To Do
        </Button>
      </HStack>
    </form>
  );
}

export default AddToDo;
