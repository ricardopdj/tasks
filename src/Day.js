import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import * as moment from 'moment'
import pt_br_moment from 'moment/locale/pt-br'

class Day extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: null
    }
  }

  render () {
    const { weekday, date, tasks } = this.props
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Header>
            { weekday }
            <p>{ date }</p>
          </Card.Header>
          <ListGroup variant='flush'>
            {
              tasks &&
              tasks.map((task, index) => {
                if (moment(task.date).format('dddd') === weekday) {
                  return <ListGroup.Item key={index}>{task.title}</ListGroup.Item>
                }
              }
              )
            }
          </ListGroup>
        </Card>
      </Col>
    )
  }
}

export default Day
