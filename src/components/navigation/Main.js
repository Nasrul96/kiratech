/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Main from '../../views/Main'

function Navigation(props) {

    return (
        <div className='navigation'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + '/assets/images/Logo.png'} alt="logo" />
            </div>
            <div className='icons'>
                <img src={process.env.PUBLIC_URL + '/assets/images/bell.png'} alt="group" className='bell'/>
                <img src={process.env.PUBLIC_URL + '/assets/images/gear.png'} alt="group" />
                <img src={process.env.PUBLIC_URL + '/assets/images/logout.png'} alt="group"  className='logout'/>
            </div>
        </div >
    )
}

export default Navigation
