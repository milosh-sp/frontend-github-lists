import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const RepoCard = ({
  ownerImage,
  repoTitle,
  repoDes,
  repoStars,
  repoIssues,
  repoSubTime,
  ownerName,
}) => {
  return (
    <>
      <Card style={{ width: '100%' }}>
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Card.Img
              style={{ height: '100px', width: '100px' }}
              variant="top"
              src="holder.js/100px180?text=Image cap"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{repoTitle}</Card.Title>
              <Card.Text>{repoDes}</Card.Text>
              <Row>
                <Col sm={2} md={2} lg={2}>
                  <Card.Text style={{ borderStyle: 'solid' }}>
                    Stars: {repoStars}
                  </Card.Text>
                </Col>
                <Col sm={2} md={2} lg={2}>
                  <Card.Text style={{ borderStyle: 'solid' }}>
                    Issues: {repoIssues}
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    Submitted {repoSubTime} days ago by {ownerName}{' '}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default RepoCard
