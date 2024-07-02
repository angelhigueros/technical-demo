import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const Gallery = ({ data }) => {
  return (
    <Row xs={1} md={2} className="g-4">
        {data.map((photo, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={photo?.url} alt={photo?.title} />
                <Card.Body>
                <Card.Title>{photo?.title}</Card.Title>
                <Card.Text>
                    <strong>ID:</strong>{photo?.id}<br />
                    <strong>Thumbnail URL:</strong>{photo?.thumbnailUrl}<br />
                    <strong>Album ID:</strong> {photo?.album?.id}<br />
                    <strong>Album Title:</strong> {photo?.album?.title}<br />
                    <hr />
                    <h5>User Information</h5>
                    <strong>Name:</strong> {photo?.album?.user?.name}<br />
                    <strong>Username:</strong> {photo?.album?.user?.username}<br />
                    <strong>Email:</strong>{photo?.album?.user?.email}<br />
                    <strong>Phone:</strong> {photo?.album?.user?.phone}<br />
                    <strong>Website:</strong>{photo?.album?.user?.website}<br />
                    <strong>Company:</strong> {photo?.album?.user?.company?.name}<br />
                    <strong>Catchphrase:</strong> {photo?.album?.user?.company?.catchPhrase}<br />
                    <strong>BS:</strong> {photo?.album?.user?.company?.bs}<br />
                    <strong>Address:</strong> {photo?.album?.user?.address?.street}, {photo?.album?.user?.address?.suite}, {photo?.album?.user?.address?.city}({photo?.album?.user?.address?.zipcode})<br />
                    <strong>Geo:</strong> {JSON.stringify(photo?.album?.user?.address?.geo)}<br />

                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
    </Row>
  )
}
