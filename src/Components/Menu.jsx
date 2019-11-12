import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Menu extends Component {

    showMenu = (menu) => {
        let xMenu
        if (menu.length > 0) {
            xMenu = menu.map((menuItem, index) => {
                return (
                    <li key={index} className="nav-item">
                        <NavLink
                            exact={menuItem.exact}
                            to={menuItem.to}
                            className='nav-link'
                        >
                            {menuItem.name}
                        </NavLink>
                    </li>
                )
            })
        }
        return <ul className="nav nav-tabs">{xMenu}</ul>
    }


    render() {
        const menu = [
            { exact: true, to: '/', name: 'Home' },
            { exact: false, to: '/about', name: 'About' },
            { exact: false, to: '/contact', name: 'Contact' },
            { exact: false, to: '/course', name: 'Course' },
            { exact: false, to: '/promptEx', name: 'PromptEx' },
            { exact: false, to: '/login', name: 'Login' },
        ]

        return (
            <div>
                {this.showMenu(menu)}
            </div>
        )
    }
}
