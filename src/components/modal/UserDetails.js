import React from 'react';
import { Flag, Image, Modal, Grid, Icon } from 'semantic-ui-react';
import moment from 'moment';

function UserDetails(props) {
    const { selectedUser } = props;

    return (
        <>
            <Modal.Content>
                <Grid stackable>
                    <Grid.Row columns={2} >
                        <Grid.Column width={4}>
                            <div className='info'>
                                <Image
                                    src={selectedUser.picture.large}
                                />
                                <div className='title'>
                                    {selectedUser.name.first + ' ' + selectedUser.name.last}
                                    <Icon
                                        name={selectedUser.gender === 'male' ? 'man' : 'woman'}
                                        aria-label='man'
                                        className={selectedUser.gender === 'male' ? 'man' : 'woman'}
                                    />
                                    <div className='sub-title'>
                                        @{selectedUser.login.username}
                                    </div>
                                </div>
                                <div className='additional-info'>
                                    {selectedUser.location.state + ' , ' + selectedUser.location.country + ' '}
                                    <Flag name={selectedUser.location.country.toLowerCase()} />
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <div className='contact d flex row justify-content start wrap'>
                                <span>
                                    <a href={`mailto:${selectedUser.email}`}>
                                        <Icon name='mail' />
                                        {selectedUser.email}
                                    </a>
                                </span>
                                <span>
                                    <a href={`tel:${selectedUser.cell}`}>
                                        <Icon name='mobile' />
                                        {selectedUser.cell}
                                    </a>
                                </span>
                                <span>
                                    <a href={`tel:${selectedUser.phone}`}>
                                        <Icon name='phone' />
                                        {selectedUser.phone}
                                    </a>
                                </span>
                            </div>
                            <div className='biodata'>
                                <div className='data'>
                                    <span>Date of Birth : </span>
                                    {moment(selectedUser.dob.date).format('DD MMM YYYY')}
                                </div>
                                <div className='data'>
                                    <span>Address : </span>
                                    {`
                                    ${selectedUser.location.street.number}
                                    ${selectedUser.location.street.name}, 
                                    ${selectedUser.location.postcode} 
                                    ${selectedUser.location.city},
                                    ${selectedUser.location.state},
                                    ${selectedUser.location.country}
                                    `}
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>


                </Grid>
            </Modal.Content>
        </>
    );
}

export default UserDetails;
