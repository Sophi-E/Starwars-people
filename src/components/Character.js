import React, { useContext, useEffect, useState } from "react";
import { Modal, Row, Col, Image } from "react-bootstrap";
import { PeopleContext } from "../context/peopleContext";
import starrwars from "../starrwars.jpg";

const Character = (props) => {
  const { characters } = useContext(PeopleContext);
  const [dataReady, setDataReady] = useState(false);

  const [character, setCharacter] = useState({});

  useEffect(() => {
    characters.length > 0 &&
      setCharacter(characters.find(({ url }) => url === props.url));

    if (props.url) setDataReady(true);
  }, [characters, props.url]);

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
            <Row>
              <Col xs={6} md={4}>
                <Image fluid src={starrwars} alt="dummy image" rounded />
              </Col>
            </Row>
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
