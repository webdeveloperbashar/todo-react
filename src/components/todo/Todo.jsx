import React, { useState } from "react";
import classes from "../todo/todo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./ListItem";
export default function Todo() {
  let search = document.querySelector("input"); // html input tag
  const [item, setItem] = useState("");
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const [value, setValue] = useState([]);
  // click handler
  const HandleClick = () => {
    if (item === "") {
      alert("Fill Must Be Fill up");
    } else {
      setValue(() => [...value, item]);
      setItem("");
      search.style.backgroundColor = ''
    }
  };
  // keypress handler
  const handlePress = (e) => {
    if (e.key === "Enter") {
      if (item === "") {
        alert("Fill Must Be Fill up");
      } else {
        setValue(() => [...value, item]);
        setItem("");
        search.style.backgroundColor = ''  
      }
    }
  };

  // item delete handler
  const handleDelete = (e) => {
    e.target.parentNode.parentNode.parentNode.remove();
  };

  // item edit handler
  const handleEdit = (e) => {
    let targetBtn = e.target.parentNode.parentNode.parentNode;
    let value = targetBtn.textContent;
    setItem(value);
    targetBtn.remove();
    search.style.backgroundColor = 'red'
  };

  return (
    <div className={classes.todoFrame}>
      <div className={classes.header}>
        <h2 className="text-center text-uppercase font-weight-bold text-white mt-3">
          React ToDo List
        </h2>
        <div className={classes.search}>
          <Input
            type="text"
            className="form-control p-2"
            placeholder="Add ToDo List"
            name="text"
            value={item}
            onchange={handleChange}
            onkeypress={handlePress}
          />
          <Input
            onclick={HandleClick}
            type="button"
            className={classes.button}
            value="ADD"
          />
        </div>
        {/* <h5 className='bg-danger p-2 m-2 rounded text-center text-white'></h5> */}
      </div>
      <div className={classes.itemList}>
        <ul>
          {value.map((v, i) => {
            return (
              <ListItem
                text={classes.text}
                list={classes.list}
                edit={handleEdit}
                delete={handleDelete}
                key={i}
                value={v}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// input field dynamic
function Input(props) {
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onchange}
        onClick={props.onclick}
        onKeyPress={props.onkeypress}
      />
    </>
  );
}