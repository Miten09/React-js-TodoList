import React from "react";

function DeleteModal({ deleted, surePendingdelete, sureDoneDelete }) {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <h3>Are You Sure ? </h3>
        <span>This Task will deleted permanentely</span>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-warning"
          onClick={surePendingdelete}
        >
          Yes
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          class="btn btn-info"
          onClick={() => deleted(false)}
        >
          No
        </button>
      </div>
    </>
  );
}

export default DeleteModal;
