import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'

import CourseItem from './CourseItem'

export default class Course extends Component {

    showMenuCourse = (url, menuCourse) => {
        let xCourseMenu
        if (menuCourse.length > 0) {
            xCourseMenu = menuCourse.map((menuCourseItem, index) => {
                const urlCourse = url + menuCourseItem.to
                return (
                    <NavLink
                        key={index}
                        className="list-group-item list-group-item-action"
                        exact={menuCourseItem.exact} to={urlCourse}
                    >
                        {menuCourseItem.name}
                    </NavLink>
                )
            })
        }
        return <ul className="list-group">{xCourseMenu}</ul>
    }

    render() {
        console.log(this.props);

        const { match } = this.props
        const { url } = match

        const menuCourse = [
            { exact: false, to: '/angular', name: 'Angular' },
            { exact: false, to: '/reactjs', name: 'ReactJS' },
            { exact: false, to: '/vuejs', name: 'VueJS' }
        ]

        return (
            <div className="row">
                <div className="col-md-2">
                    {this.showMenuCourse(url, menuCourse)}
                </div>
                <div className="col-md-10">
                    <Route path={`${match.url}/:courseName`} component={CourseItem} />

                    <Route exact path={match.url} render={() => (
                        <h3>Please select course!</h3>
                    )} />

                </div>
            </div>
        )
    }
}
