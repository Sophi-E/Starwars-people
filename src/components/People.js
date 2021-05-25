import React, { useState, useContext } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { PeopleContext } from "../context/peopleContext";
import Character from "./Character";

const People = () => {
  const { characters, loading } = useContext(PeopleContext);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState("");

  if (loading) return <Spinner animation="border" variant="primary" />;

  return (
    <>
      {characters.length > 0 &&
        characters.map((character, index) => {
          return (
            <>
              <ListGroup key={index} as="ul" style={divStyle}>
                <ListGroup.Item
                  action
                  onClick={() => {
                    setId(character.url);
                    // alert(id);
                    setModalShow(true);
                  }}
                >
                  {character.name}
                </ListGroup.Item>
              </ListGroup>
            </>
          );
        })}

      <div>
        <Character
          show={modalShow}
          onHide={() => setModalShow(false)}
          url={id}
        />
      </div>
    </>
  );
};

export default People;

const divStyle = {
  width: "100%",
  margin: "0 auto",
  marginTop: "1rem",
};
