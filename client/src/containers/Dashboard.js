import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import { Gallery } from '../components/Gallery'
import { RawGallery } from '../components/RawGallery'

export function Dashboard() {
    // Definitions
    const [view, setView] = useState('1')
    const [page, setPage] = useState(0)

    const radiosView = [
        { name: 'Gallery', value: '1' },
        { name: 'Row', value: '2' }
    ]

    // Utils
    const [values, setValues] = useState({
        photoTitle: '',
        albumTitle: '',
        userEmail: '',
        limit: '25'
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleLimit = (type) => {
        setPage(prev => type === 1 ? prev + 1 : Math.max(0, prev - 1))
    }

    // Fetch Data
    const [data, setData] = useState([])

    const getData = async () => {
        const query = new URLSearchParams()

        if (values.photoTitle) query.append('title', values.photoTitle)
        if (values.albumTitle) query.append('album.title', values.albumTitle)
        if (values.userEmail) query.append('album.user.email', values.userEmail)

        query.append('limit', (page + 1) * parseInt(values.limit))
        query.append('offset', page * parseInt(values.limit) + 1)

        const response = await fetch(`/api/photo?${query.toString()}`)
        const _data = await response.json()
        setData(_data || [])
    }

    useEffect(() => {
        getData()
    }, [page]) 

    const handleFilter = (e) => {
        e.preventDefault()
        setPage(0) 
        getData()
    }

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary mb-3">
                <Container>
                    <Navbar.Brand>MetaPhoto</Navbar.Brand>
                </Container>
            </Navbar>

            <Container className='mb-4'>
                <Card>
                    <Card.Header as="h5">Filters</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleFilter}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="3">
                                    <Form.Label>By photo title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="repudiandae iusto"
                                        onChange={handleInput}
                                        name='photoTitle'
                                        value={values.photoTitle}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="4">
                                    <Form.Label>By album title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="quidem"
                                        onChange={handleInput}
                                        name='albumTitle'
                                        value={values.albumTitle}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="3">
                                    <Form.Label>By user email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Sincere@april.biz"
                                        onChange={handleInput}
                                        name='userEmail'
                                        value={values.userEmail}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="2">
                                    <Form.Label>Page size (limit)</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="25"
                                        onChange={handleInput}
                                        name='limit'
                                        value={values.limit}
                                    />
                                </Form.Group>
                            </Row>
                            <div className="d-grid gap-2">
                                <Button size="lg" type="submit">Filter</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>

            <Container className='mb-4'>
                <Row>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <ButtonGroup>
                            {radiosView.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant='primary'
                                    name="radio"
                                    value={radio.value}
                                    checked={view === radio.value}
                                    onChange={(e) => setView(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        {page * parseInt(values.limit) + 1} a {(page + 1) * parseInt(values.limit)}
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <ButtonGroup>
                            <Button onClick={() => handleLimit(0)} disabled={page === 0}>
                                {"<"}
                            </Button>
                            {parseInt(values.limit) <= data.length && 
                                <Button onClick={() => handleLimit(1)}>
                                    {">"}
                                </Button>
                            }
                            
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>

            <Container className='mb-4'>
                {view == 1 ? <Gallery data={data} /> : <RawGallery data={data} />}
            </Container>
        </>
    )
}
