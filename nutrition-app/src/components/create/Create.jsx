import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const sendDataToApi = () => {
        axios.post(`https://615e6f0b12571a0017207b11.mockapi.io/CRUDTUT`, 
        {
            firstName,
            lastName,
        })
    }

    return (
        <div>
            <h1>create</h1>

  <Form>
    <Form.Field>
      <label>First Name</label>
      <input onChange={(e) => setFirstName(e.target.value)} name={firstName} placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input onChange={(e) => setLastName(e.target.value)} name={lastName} placeholder='Last Name' />
    </Form.Field>
    <Button onClick={sendDataToApi} type='submit'>Submit</Button>
  </Form>
        </div>
    )
}

export default Create
