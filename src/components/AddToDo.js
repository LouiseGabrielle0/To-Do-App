import { HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'

function AddToDo() {

function handleSubmit(event) {

}

  return (
    <form onSubmit={handleSubmit}>
    <HStack mt="8">
    <Input variant="filled" placeholder="Add a To Do here"/>
      <Button colorScheme="pink" px="8" type="submit">Add To Do</Button>
      </HStack>
    </form>
  )
}

export default AddToDo
