import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useForm from './read'

const Todo = () => {
    var[todos,settodos] = useForm({title:"",quantity:"",description:""})
    
  return (
    <Container maxWidth="sm">
        <Box sx={{bgcolor: '#cfe8fc', height: '80vh'}}>
    <div>
      <Typography variant='h4'>ToDo Application</Typography>
      <br></br>
      <TextField name='title' value={todos.title} onChange={settodos} variant='outlined'label="ToDo Title"></TextField>
      <br></br>
      <br></br>
      <TextField name='quantity' value={todos.quantity} onChange={settodos} variant='outlined'label="Quantity"></TextField>
      <br></br>
      <br></br>
      <TextField name='description' value={todos.description} onChange={settodos} variant='outlined'label="Description"></TextField>
       <br></br>
       <br></br>
      <Button variant='contained'color='primary'>Submit</Button>
      <Typography variant='h5'>{todos.title}</Typography>
      <Typography variant='h5'>{todos.quantity}</Typography>
      <Typography variant='h5'>{todos.description}</Typography>
    </div>
    </Box>
    </Container>
  )
}

export default Todo
