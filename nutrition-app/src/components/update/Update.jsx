import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Update = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    const sendDataToApi = () => {
        axios.put(`https://615e6f0b12571a0017207b11.mockapi.io/CRUDTUT/${ID}`, 
        {
            firstName,
            lastName,
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <h1>create</h1>

            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToApi}>Update</Button>
            </Form>
        </div>
    )
}

export default Update;
