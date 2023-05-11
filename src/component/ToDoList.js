import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function ToDoList() {
  const [trip, settrip] = useState("");
  const [list, setlist] = useState([]);
  const [done, setdone] = useState([]);

  function handleChange(e) {
    settrip(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    setlist((olditems) => {
      return [...olditems, trip];
    });
    settrip("");
  }

  function handleDelete(id) {
    setlist((olditems) => {
      return olditems.filter((value, index) => {
        return index !== id;
      });
    });
  }

  function handleTrip(e, list, index) {
    const checked = e.target.checked;
    const value = e.target.value;
    if (checked) {
      let a = list.splice(index, 1);
      setlist([list.splice(value, 1), ...list]);
      done.push(...a);
    }
  }

  function handleDeleteDone(id) {
    setdone((olditems) => {
      return olditems.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <form
        style={{ textAlign: "center", margin: "20px" }}
        onSubmit={handleClick}
      >
        <label>Your trip : </label>
        <TextField
          id="outlined-basic"
          label="Add Your trip"
          variant="outlined"
          value={trip}
          onChange={handleChange}
          required
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" type="submit" color="success">
          Success
        </Button>
      </form>
      <p style={{ marginLeft: "45%" }}>Todo Task</p>
      {list.map((value, index) => {
        return (
          <div
            style={{ display: "flex", marginLeft: "42%", padding: "1%" }}
            key={index}
          >
            <input
              type="checkbox"
              name="trip"
              id="trip"
              value={value}
              onChange={(e) => handleTrip(e, list, index)}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>{value} </div>&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <hr />
      <p style={{ marginLeft: "45%" }}>Done Task</p>
      {done.map((value, index) => {
        return (
          <div
            style={{ display: "flex", marginLeft: "42%", padding: "1%" }}
            key={index}
          >
            <div>{value}</div>&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => handleDeleteDone(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ToDoList;
