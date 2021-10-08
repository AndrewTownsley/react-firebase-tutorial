import React, { useEffect, useState } from 'react';
import { Icon, Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
    axios.get(`https://615e6f0b12571a0017207b11.mockapi.io/CRUDTUT`)
        .then((getData) => {
            setApiData(getData.data);
        })
}, [])

const setId = (id) => {
    console.log(id);
    localStorage.setItem('ID', id);
}

    return (
        <div>
            <h1>Read</h1>
                    <Table celled>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                apiData.map((data) => {
                                    return <Table.Row key={data.id}>
                                        <Table.Cell>{data.id}</Table.Cell>
                                        <Table.Cell>{data.firstName}</Table.Cell>
                                        <Table.Cell>{data.lastName}</Table.Cell>
                                        <Table.Cell>
                                            <Link to='/update'>
                                                <Button onClick={() => setId(data.id)} color="green">Update</Button>
                                            </Link>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Link to='/delete'>
                                                <Button color="red">Delete</Button>
                                            </Link>
                                        </Table.Cell>
                                    </Table.Row>
                                    }
                                )
                            }
                  
                        </Table.Body>
                    </Table>
        </div>
    )
}

export default Read
