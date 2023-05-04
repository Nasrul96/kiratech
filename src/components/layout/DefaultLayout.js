/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Main from '../../views/Main'
import Navigation from '../navigation/Main'

function DefaultLayout(props) {

    return (
        <div className='default'>
            <Navigation />
            <Main />
        </div >
    )
}

export default DefaultLayout
