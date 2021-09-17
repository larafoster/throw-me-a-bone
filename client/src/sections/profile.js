import React from 'react';
import {
  Container,
  ListGroup,
  Card,

} from 'react-bootstrap';

const Profile = () => {
  return (
    <>
<Container className="mt-5">
<Card style={{ width: '18rem' }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Sponsored Pets</ListGroup.Item>
    <ListGroup.Item>Favorite Pets</ListGroup.Item>
    <ListGroup.Item>Donations to Date</ListGroup.Item>
  </ListGroup>
</Card>
</Container>

    </>
  );
}

export default Profile;
