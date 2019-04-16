import React, { Component } from 'react'
import './App.css'
import * as TasksAPI from './TasksAPI'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import * as moment from 'moment'
import pt_br_moment from 'moment/locale/pt-br'
import Day from './Day'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: null,
      tasks: null
    }
  }

  componentDidMount () {
    this.getTasksFrom(moment().format('YYYY-MM-DD'), 2)
  }

  getTasksFrom (startDate, end) {
    TasksAPI
      .getTasksFrom(moment().format('YYYY-MM-DD'), end)
      .then((tasks) => {
        this.setState({ tasks },
          () => {
            this.initDays()
          })
      })
  }

  initDays () {
    let days = [
      moment().format('YYYY-MM-DD'),
      moment().add(1, 'days').format('YYYY-MM-DD'),
      moment().add(2, 'days').format('YYYY-MM-DD')
    ]
    this.setState({ days })
  }

  render () {
    return (
      <div className='App py-5'>
        <Container>
          <Row>
            {
              this.state.days && this.state.days.map((day, index) =>
                <Day
                  key={index}
                  weekday={moment(day).format('dddd')}
                  date={moment(day).format('DD/MM')}
                  tasks={this.state.tasks}
                />
              )
            }
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
