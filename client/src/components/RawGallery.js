import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export const RawGallery = ({ data }) => {
  return (
    <Row xs={1} md={2} className="g-4">
        {data.map((photo, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="p-4">
                <Card.Text>
                  {JSON.stringify(photo)}
                </Card.Text>
            </Card>
            </Col>
        ))}
    </Row>
  )
}
