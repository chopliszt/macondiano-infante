import React from "react";

const NarvBarItem = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a className={props.aClase} href={props.aHref}>
          {props.texto}
        </a>
      </li>
    </div>
  );
};

export default NarvBarItem;
