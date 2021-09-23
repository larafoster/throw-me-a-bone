import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardGroup,
  Accordion, 
  Form,
  Button,
  
} from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import { saveDogIds, getSavedDogIds } from "../utils/localStorage";
import Auth from "../utils/auth";

const PetList = ({ response }) => {
  // create state for holding returned google api data
  const [allDogs, setallDogs] = useState([]);
  // create state to hold saved dogId values
  const [savedDogIds, setSavedDogIds] = useState(getSavedDogIds());

  const [saveDog, { error }] = useMutation(SAVE_DOG);

  // set up useEffect hook to save `savedDogIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveDogIds(savedDogIds);
  });

  // create function to handle saving a dog to our database
  const handleSaveDog = async (id) => {
    // find the dog in `allDogs` state by the matching id
    const dogToSave = allDogs.find((dog) => dog.id === id);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveDog({
        variables: { dogData: { ...dogToSave } },
      });
      console.log(savedDogIds);
      setSavedDogIds([...savedDogIds, dogToSave.id]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
        <Container>
          <Row>
          <h1>Adopt or Sponsor one of these beauties!</h1>

    
        <h3>
          {allDogs.length
            ? `We currently have ${allDogs.length} up for Adoption:`
            : `Find out more by clicking on the each dog's picture.`}
        </h3>
        </Row>
<div className="d-flex justify-content-center">
       <Row>
  

  <Col >
         <CardGroup> 
          {
            response.loading
            ? <div>unloading</div>
            : response.data.dogs.map((dog) => {
            return (
              <Card key={dog.id} >
              <Card.Header >
              <h3 className="d-flex d-flex justify-content-between">{dog.name}
        
              </h3>
           
              </Card.Header>
        <div className="content">
          
                        <div className="content-overlay"></div>
                {dog.image ? (
                  <Card.Img
                    src={dog.image}
                    alt={`The picture for ${dog.name}`}
                    variant="top"
                    className="img-fluid"
                    
                  />
                ) : null}
                 <div className="d-flex content-details fadeIn-bottom">
                          <p>
                            {dog.description}
                          </p>
                          </div>
                </div>
                <Card.Body>
                  <Card.Title>Breed: {dog.breed}</Card.Title>
                  <Card.Title>Age: {dog.age}</Card.Title>
                  <Card.Title>Gender: {dog.gender}</Card.Title>
                 

                </Card.Body>
             <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="1">
    <Accordion.Header><h5><i className="fas fa-external-link "></i> Share</h5></Accordion.Header>
    <Accordion.Body>
    <div className="d-flex justify-content-between">
    <div className="row">
      <div className="col text-center">
<a href="https://twitter.com/intent/tweet?text=Check This adorable pup needs your support. Find out more here: https://tab-lara.herokuapp.com/" rel="noreferrer"> <i className="fab fa-twitter text-lblue fa-2x"></i></a> </div><span></span>
</div>
    <div className="row">

<div className="col text-center"> <a
                  href="mailto:?subject=Check out this cute pup!&body=The shelter is looking for sponsors!  https://tab-lara.herokuapp.com/"><i
                    className="fas fa-envelope text-orange fa-2x pe-2"></i></a></div>
                    </div>
                        <div className="row">

<div class="col text-center"> <a
                  href="sms:add contacts&body=Check out this cute pup!  https://tab-lara.herokuapp.com"><i
                    class="fas fa-mobile-alt text-red fa-2x"></i></a>  </div>

                    </div>
                    </div> <p className="small ps-2 pt-3">Help us spread the word. Tweet, Email or Text your friends!</p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><h5><i className="fas fa-hand-heart "></i> Sponsor</h5></Accordion.Header>
    <Accordion.Body>
    <Form>
 <Form.Select size="lg">
    <option>Sponsor Options </option>
    <option value="1">Snack: $15</option>
    <option value="2">Stuffy: $25</option>
    <option value="3">Dinner: $35</option>
    <option value="4">Bed: $50</option>
    <option value="5">Health $75 </option>
    
  </Form.Select>
    <Button variant="warning" className="my-3" size="lg" type="submit">
    <i className="fas fa-plus"></i> Add to account
  </Button>


  </Form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><h5><i class="far fa-home-heart"></i> Adopt</h5></Accordion.Header>
    <Accordion.Body>
    <h5>The adoption fee is $125.</h5> Adoption fees help cover the medical care of the animal while he or she waits for a new home, as well as food and transportation costs. These fees help to provide care for the other animals in the shelter or rescue group who may have medical bills that are much higher than any possible adoption fee. The money also acts as a donation to help support the organization as a whole, allowing the group to continue its efforts to rescue and rehome pets.
        <Button variant="warning" className="my-3" size="lg" type="submit">
   Proceed to Adoption Form <i className="fas fa-arrow-right"></i>
  </Button>
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 

              </Card>
            );
          })}
         </CardGroup>
       </Col>
       </Row>
       </div>
      </Container>
    <div className="py-5"><span></span></div>
    </>
  );
};

export default PetList;
