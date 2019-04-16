import * as moment from 'moment'
import pt_br_moment from 'moment/locale/pt-br'

// export const getTasksFrom = (startDate, days) => {
//   let data = []
//   let day = moment(startDate)
//   for (let index = 0; index <= days; index++) {
//     data.push({ date: day.format('YYYY-MM-DD'), tasks: [] })
//     day = day.add(1, 'days')
//   }
//   getTasks(star)
// }

export const getTasksFrom = (startDate, days) =>
  fetch('./fakeData.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch(err => {
      throw err
    })

// export const searchByTitle = (title, page) => fetch(`${api}&s=${title}&page=${page}`)
//   .then(res => res.json())
//   .catch(err => {
//     throw err
//   })

// export const searchByID = (id) => fetch(`${api}&i=${id}`)
//   .then(res => res.json())
//   .catch(err => {
//     throw err
//   })
