import React from 'react'
import { Card, Col, Row, Container, Badge } from 'react-bootstrap'
import moment from 'moment'

const RepoCard = ({
  ownerImage,
  repoTitle,
  repoDes,
  repoStars,
  repoIssues,
  repoSubTime,
  ownerName,
}) => {
  let repoSubmitTime = moment(moment(repoSubTime.slice(0, 10), 'YYYY-MM-DD'))
  let todayDate = moment(moment().startOf('day').format('YYYY-MM-DD'))

  let days = todayDate.diff(repoSubmitTime, 'days')
  return (
    <>
      <Card style={{ width: '100%', marginBottom: '1%' }}>
        <Row>
          <Col sm={2} md={2} lg={2}>
            <Container style={{ marginTop: '20px' }}>
              <Card.Img
                style={{ height: '100px', width: '100px', border: 'solid' }}
                variant="top"
                src={ownerImage}
              />
            </Container>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                <strong>{repoTitle}</strong>
              </Card.Title>
              <Card.Text>
                {repoDes ? (
                  repoDes
                ) : (
                  <div style={{ color: 'red' }}>NO REPOSITORY DESCRIPTION</div>
                )}
              </Card.Text>
              <Row>
                <Col sm={2} md={2} lg={2}>
                  <Card.Text>
                    <Badge variant="warning">Stars: {repoStars}</Badge>
                  </Card.Text>
                </Col>
                <Col sm={2} md={2} lg={2}>
                  <Card.Text style={{}}>
                    <Badge variant="danger">Issues: {repoIssues}</Badge>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    Submitted{' '}
                    <strong>{days === 0 ? (days = 'today') : days}</strong>
                    {days === 'today' ? 'by ' : ' days ago by'}{' '}
                    <strong>{ownerName}</strong>
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
