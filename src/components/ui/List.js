import React from "react";

const List = ({ children }) => {
  return (
    <div className="rTable">
      <div className="rTableRow">
        <div className="rTableHead">
          <strong>Item Name</strong>
        </div>
        <div className="rTableHead">
          <strong>Store Name</strong>
        </div>
        <div className="rTableHead">
          <strong>Date/Time</strong>
        </div>
      </div>
      {children}
    </div>
  );
};

export default List;
