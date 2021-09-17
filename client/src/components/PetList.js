import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  CardColumns
} from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { SAVE_DOG } from "../utils/mutations";
import { saveDogIds, getSavedDogIds } from "../utils/localStorage";

import Auth from "../utils/auth";

const PetList = () => {
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
          <h1>Adopt or Sponsor one of these beauties!</h1>
        </Container>

      <Container>
        <h2>
          {allDogs.length
            ? `We currently have ${allDogs.length} up for Adoption:`
            : `Find out more by clicking on the each dog's picture.`}
        </h2>
        <CardColumns>
          {allDogs.map((dog) => {
            return (
              <Card key={dog.id} border="dark">
                {dog.image ? (
                  <Card.Img
                    src={dog.image}
                    alt={`The picture for ${dog.name}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{dog.name}</Card.Title>
                  <p className="small">Breed: {dog.breed}</p>
                  <Card.Text>{dog.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedDogIds?.some(
                        (savedId) => savedId === dog.id
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveDog(dog.id)}
                    >
                      {savedDogIds?.some((savedId) => savedId === dog.id)
                        ? `${dog.name} is already saved!`
                        : "Save This dog!"}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default PetList;
