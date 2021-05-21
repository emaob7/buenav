import React, { useState } from "react";
import { consumerFirebase } from "../../../server/";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Papel from "../../Children/Papel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Experiencia = ( props, navigation ) => {
  const firebase = props.firebase;
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { id2: uuidv4(), firstName: "", lastName: "" }
  ]);
  const [arrayGu, setArrayGu] = useState([]);//este

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  

  const handleChangeInput = (id2, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id2 === i.id2) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id2: uuidv4(), firstName: "", lastName: "" },
    ]);
  };


  const handleRemoveFields = (id2) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id2 === id2),
      1
    );
    setInputFields(values);
  };

  const guardarDatosp = () => {
    const inputF = {...arrayGu, inputFields};
    const { id } = props.match.params;

    firebase.db
      .collection("Datosps")
      .doc(id)
      .set(inputF, { merge: true })
      .then((success) => {
        console.log("Bien");
      });
  };

  return (
    <Papel>
      <h1>Add New Member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id2}>
            <TextField
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange={(event) => handleChangeInput(inputField.id2, event)}
            />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          endIcon={<Icon>send</Icon>}
          onClick={guardarDatosp}
        >
          Guardar cambios
        </Button>
      </form>

      <Button
        color="secondary"
        variant="contained"
        style={{ marginRight: "1rem" }}
        onClick={() => navigation.previous()}
      >
        Back
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Papel>
  );
};

export default consumerFirebase(Experiencia);
