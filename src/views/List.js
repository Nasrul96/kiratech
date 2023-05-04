/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { Button, Icon, Flag, Pagination, Table, Modal } from 'semantic-ui-react'
import moment from 'moment';
import UserDetails from '../components/modal/UserDetails';
import { GetUserList } from '../services/user'

function List() {
    const [users, setUsers] = useState([])
    const [open, setOpen] = useState(false)
    const [activePage, setActivePage] = useState(1)
    const [selectedUser, setSelectedUser] = useState(null)
    const mounted = useRef(true)

    useEffect(() => {
        GetUserList().then((userList) => {
            if (mounted.current) {
                setUsers(userList.results)
            }
        })
        return () => (mounted.current = false)
    }, [])

    const handleRefresh = () => {
        GetUserList().then((userList) => {
            setUsers(userList.results)
        })
    }

    const handleUserClick = (user) => {
        setSelectedUser(user)
        setOpen(true)
    }

    const handlePaginationChange = (e, {activePage}) => {
        setActivePage(activePage)
    }

    useEffect(() => {
        GetUserList(activePage).then((userList) => {
            setUsers(userList.results)
        })
    }, [activePage])

    return (
        <div className='list'>
            <Modal onClose={() => setOpen(false)} open={open} closeIcon className='user-details'>
                <UserDetails setOpen={setOpen} selectedUser={selectedUser} />
            </Modal>
            <Button className='refresh' floated='right' onClick={handleRefresh}>
                <Icon name='refresh' /> Refresh List
            </Button>
            <Table padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell textAlign='right'>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users?.map((data, i) => (
                        <Table.Row key={data.id.value + ' - ' + i} onClick={() => handleUserClick(data)}>
                            <Table.Cell collapsing>
                                <div className='grey-text'>{moment(data.registered.date).format('DD MMM YYYY')}</div>
                            </Table.Cell>
                            <Table.Cell>
                                <div className='title'>{data.name.title + ' ' + data.name.first + ' ' + data.name.last}</div>
                                <div className='sub-title'>@{data.login.username}</div>
                            </Table.Cell>
                            <Table.Cell collapsing>
                                <div className='gender'>{data.gender}</div>
                            </Table.Cell>
                            <Table.Cell collapsing>
                                <div>
                                    <Flag name={data.location.country.toLowerCase()} />
                                    {data.location.country}
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <div>{data.phone}</div>
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                <div className='grey-text'>{data.email}</div>
                            </Table.Cell>
                        </Table.Row>
                    ))
                    }
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6' textAlign='center'>
                            <Pagination
                                activePage={activePage}
                                onPageChange={handlePaginationChange}
                                firstItem={null}
                                lastItem={null}
                                pointing
                                secondary
                                totalPages={10}
                                siblingRange={0}
                            />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div >
    )
}

export default List
