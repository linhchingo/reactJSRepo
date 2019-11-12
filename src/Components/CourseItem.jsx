import React, { Component } from 'react'

export default class CourseItem extends Component {
  render() {
      const {match} = this.props

      const{courseName} = match.params
    return (
      <div>
        <h3>Course: {courseName}</h3>
      </div>
    )
  }
}
