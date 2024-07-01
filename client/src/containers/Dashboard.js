import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export function Dashboard() {

    const[data, setData] = useState([])

    useEffect(()=> {
        
        const getData = async () => {
         const response = await fetch('http://localhost:5000/api')
         const _data = await response.json()
         setData(_data.users || [])
        }
        
        getData()

    }, [])

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#">React Test App</Navbar.Brand>
                </Container>
            </Navbar>

            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => 
                            <tr>
                                <td>{item}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>

        </>
    )
}