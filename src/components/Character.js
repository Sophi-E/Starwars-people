import React, { useContext, useEffect, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { PeopleContext } from "../context/peopleContext";

const Character = (props) => {
  const { characters } = useContext(PeopleContext);
  const [dataReady, setDataReady] = useState(false);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    characters.length > 0 &&
      setCharacter(characters.find(({ url }) => url === props.url));

    if (props.url) setDataReady(true);
  }, [props.url]);

  return (
    <p>
      {dataReady && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {character.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Gender: {character.gender}</strong>
            </p>
            <p>
              <strong> Height: {character.height}</strong>
            </p>
          </Modal.Body>
        </Modal>
      )}
    </p>
  );
};

export default Character;
