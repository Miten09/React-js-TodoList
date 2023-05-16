import React from "react";
import { Grid } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { DeleteForever } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";

function ListComponent({ list, handleTrip, handleDelete, handleEdit, done }) {
  return (
    <>
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
                    checked={done ? true : false}
                    id="trip"
                    value={value}
                    onChange={(e) => handleTrip(e, list, index)}
                  />

                  <div style={{ marginLeft: "5px" }}>{value} </div>
                </div>
                <div>
                  <Grid item xs={8} sx={{ color: green[900] }}>
                    <EditIcon onClick={() => handleEdit(value, index)} />
                  </Grid>
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
    </>
  );
}

export default ListComponent;
