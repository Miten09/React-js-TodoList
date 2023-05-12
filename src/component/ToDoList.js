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

  function hanldeUndoneChange(e, done, index) {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log(checked, done, index);
    if (!checked) {
      let b = done.splice(index, 1);
      setdone([done.splice(value, 1), ...done]);
      list.push(...b);
    }
  }

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "orange",
          backgroundColor: "black",
        }}
      >
        Trip ToDo List
      </h2>
      <form style={{ margin: "20px" }} onSubmit={handleClick}>
        <TextField
          id="outlined-basic"
          label="Add Your Trip Here"
          variant="outlined"
          value={trip}
          style={{ marginLeft: "42%" }}
          onChange={handleChange}
          required
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
      </form>
      <p style={{ marginLeft: "47%" }}>Pending Trip</p>
      {list.map((value, index) => {
        return (
          <ul
            style={{ marginLeft: "42%", textAlign: "center" }}
            key={index}
            className="list-group w-25 p-0 "
          >
            <li className="list-group-item d-flex col-sm-8 justify-content-around">
              <input
                type="checkbox"
                name="trip"
                id="trip"
                value={value}
                onChange={(e) => handleTrip(e, list, index)}
              />

              <div>{value} </div>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
      <hr />
      <p style={{ marginLeft: "47%" }}>Done Trip</p>
      {done.map((value, index) => {
        return (
          <ul
            style={{ marginLeft: "42%", textAlign: "center" }}
            key={index}
            className="list-group w-25 p-0"
          >
            <li className="list-group-item d-flex col-sm-8 justify-content-around">
              <input
                type="checkbox"
                checked
                name="trip"
                id="trip"
                value={value}
                onChange={(e) => hanldeUndoneChange(e, done, index)}
              />
              <div>{value} </div>
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleDeleteDone(index)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default ToDoList;
