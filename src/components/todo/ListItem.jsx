import React from "react";
const ListItem = (props) => {
  return (
    <>
      <li className={props.list} key="0">
        <div className={props.text}>
          <p>{props.value}</p>
        </div>
        <div>
          <span onClick={props.delete} title="Delete">
            <i className="fas fa-trash pl-2 text-danger"></i>
          </span>
          <span title="Edit" onClick={props.edit}>
            <i className="far fa-edit"></i>
          </span>
        </div>
      </li>
    </>
  );
};

export default ListItem;
