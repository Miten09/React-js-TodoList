import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import ListComponent from "./ListComponent";
import DeleteModal from "./DeleteModal";

function ToDoList() {
  const [trip, settrip] = useState("");
  const [list, setlist] = useState([]);
  const [done, setdone] = useState([]);
  const [sureDelete, setsureDelete] = useState(false);
  const [sureUpdate, setsureUpdate] = useState(false);
  const [sureDoneUpdate, setsureDoneUpdate] = useState(false);

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

  function handleDelete(index, value) {
    // if (type === "list") {
    //   // list delete
    // } else {
    //   //done delete
    // }
    console.log(index, value);
    if (value == "list") {
      setsureDelete(true);
    } else {
      setsureDelete(true);
    }
    // console.log(index);
    localStorage.setItem("id", index);
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
    localStorage.setItem("id", id);

    setdone((olditems) => {
      return olditems.filter((value, index) => {
        return index !== id;
      });
    });
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

  function handleEdit(value, index) {
    localStorage.setItem("value", value);
    localStorage.setItem("id", index);
    settrip(localStorage.getItem("value"));
    setsureUpdate(true);
    // console.log(index);
  }

  function handleSureDelete() {
    let c = localStorage.getItem("id");
    console.log(c);
    setlist((olditems) => {
      return olditems.filter((value, index) => {
        return index != c;
      });
    });
    setsureDelete(false);
  }

  function handleSureDoneDelete() {
    let c = localStorage.getItem("id");
    console.log(c);
    setdone((olditems) => {
      return olditems.filter((value, index) => {
        return index != c;
      });
    });
    setsureDelete(false);
  }

  function handleEditDone(value, index) {
    localStorage.setItem("value", value);
    localStorage.setItem("id", index);
    settrip(localStorage.getItem("value"));
    setsureDoneUpdate(true);
  }

  function handleUpdate() {
    let b = localStorage.getItem("id");
    console.log(b);
    let updatedList = list.map((value, index) => {
      if (index == b) {
        return trip;
      } else {
        return value;
      }
    });
    setlist(updatedList);
    setsureUpdate(false);
    settrip("");
  }

  function handleDoneUpdate() {
    let g = localStorage.getItem("id");
    console.log(g);
    let updatedList = done.map((value, index) => {
      if (index == g) {
        return trip;
      } else {
        return value;
      }
    });
    setdone(updatedList);
    setsureDoneUpdate(false);
    settrip("");
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
        &nbsp;&nbsp;&nbsp;
        {sureUpdate && (
          <button type="button" class="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        )}
        {sureDoneUpdate && (
          <button
            type="button"
            class="btn btn-success"
            onClick={handleDoneUpdate}
          >
            Update
          </button>
        )}
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
      <ListComponent
        list={list}
        handleTrip={handleTrip}
        handleDelete={(index, type) => handleDelete(index, "list")}
        handleEdit={handleEdit}
      />
      <hr />
      <p style={{ marginLeft: "47%" }}>Done Trip</p>
      <ListComponent
        done={true}
        list={done}
        handleTrip={hanldeUndoneChange}
        // handleDelete={(index, type) => handleDelete(index, "done")}
        handleDelete={handleDeleteDone}
        handleEdit={handleEditDone}
      />
      {sureDelete && (
        <DeleteModal
          surePendingdelete={handleSureDelete}
          deleted={setsureDelete}
        />
      )}
    </>
  );
}

export default ToDoList;
