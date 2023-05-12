import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { DeleteForever, Height } from "@mui/icons-material";
import { red } from "@mui/material/colors";

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
    if (checked) {
      let a = list.slice(index, index + 1);
      // setlist(list);
      setlist((olditems) => {
        return olditems.filter((value, index) => {
          const checkedvalue = e.target.value;
          return checkedvalue !== value;
        });
      });
      // const dummy = done
      // dummy.push(...a)
      // setdone(dummy)
      setdone([...done, ...a]);
    }
  }
  // setstate async
  function handleDeleteDone(id) {
    setdone((olditems) => {
      return olditems.filter((value, index) => {
        return index !== id;
      });
    });
    // setdone(done.filter((value, index) => index !== id))
  }

  function hanldeUndoneChange(e, done, index) {
    const checked = e.target.checked;
    if (!checked) {
      let b = done.slice(index, index + 1);
      // setdone(done);
      setdone((olditems) => {
        return olditems.filter((value, index) => {
          const checkedvalue = e.target.value;
          return checkedvalue !== value;
        });
      });
      setlist([...list, ...b]);
    }
  }

  function handleSort(e) {
    let value = e.target.value;
    if (value === "Earlier First") {
      setlist([...list].sort());
    } else if (value === "Later First") {
      setlist([...list].sort().reverse());
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
          inputProps={{
            style: {
              height: "15px",
            },
          }}
          onChange={handleChange}
          required
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select style={{ padding: "8px" }} onChange={handleSort}>
          <option value="Sortby" default>
            Sort by
          </option>
          <option value="Earlier First">Ascending</option>
          <option value="Later First">Descending</option>
        </select>
      </form>
      <p style={{ marginLeft: "47%" }}>Pending Trip</p>
      {list.map((value, index) => {
        return (
          <ul
            style={{ marginLeft: "43%", textAlign: "center" }}
            key={index}
            className="list-group w-25 p-0 "
          >
            <li className="list-group-item col-sm-7 ">
              <div className="d-flex justify-content-around">
                <div className="d-flex p-2 " style={{ marginRight: "30%" }}>
                  <input
                    type="checkbox"
                    name="trip"
                    id="trip"
                    value={value}
                    onChange={(e) => handleTrip(e, list, index)}
                  />

                  <div style={{ marginLeft: "5px" }}>{value} </div>
                </div>
                <div>
                  <Grid item xs={8} sx={{ color: red[900] }}>
                    <DeleteForever onClick={() => handleDelete(index)} />
                  </Grid>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
      <hr />
      <p style={{ marginLeft: "47%" }}>Done Trip</p>
      {done.map((value, index) => {
        return (
          <ul
            style={{ marginLeft: "43%", textAlign: "center" }}
            key={index}
            className="list-group w-25 p-0"
          >
            <li className="list-group-item col-sm-7 ">
              <div className="d-flex justify-content-around">
                <div className="d-flex p-2" style={{ marginRight: "30%" }}>
                  <input
                    type="checkbox"
                    checked
                    name="trip"
                    id="trip"
                    value={value}
                    onChange={(e) => hanldeUndoneChange(e, done, index)}
                  />

                  <div style={{ marginLeft: "5px" }}>{value} </div>
                </div>
                <div>
                  <Grid item xs={8} sx={{ color: red[900] }}>
                    <DeleteForever onClick={() => handleDeleteDone(index)} />
                  </Grid>
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default ToDoList;
