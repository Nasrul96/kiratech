/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Icon, Button, Menu, Table } from 'semantic-ui-react'

function User(props) {

    return (
        <div className='user d flex wrap align-items a-end'>
            <div className='profile-photo'>
                <img src={process.env.PUBLIC_URL + '/assets/images/avatar.png'} alt="photo" />
            </div>
            <div className='user-info'>
                John Doe
                <div className='last-seen'>Last online: 2 days ago</div>
            </div>
            <Button className='send-message'>
                <Icon name='send' /> Send Message
            </Button>
            <Button className='add-friend'>
                <Icon name='plus' /> Add Friend
            </Button>
        </div >
    )
}

export default User
