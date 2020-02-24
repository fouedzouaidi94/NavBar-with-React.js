import React from "react";
import "./List.css";
const List = ({ list }) => {
  return (
    <ul className="myNav">
      {list.map(el => (
        <li className="hovered">
          <a href={el.link}> {el.title} </a>

          {!el.list ? null : (
            <ul>
              {
                <li className="navItem">
                  {el.list.map(el => (
                    <ul>
                      <a href={el.link}>
                        <li>{el.title}</li>
                      </a>
                    </ul>
                  ))}
                </li>
              }
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
export default List;
