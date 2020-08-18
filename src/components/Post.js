import React from "react";
import Comment from "./Comment";

function Post(props) {
  return (
    <section className="about">
      {props.children}
      <input type="checkbox" id={props.hd} className="hide" />
      <label htmlFor={props.hd}>Комментарии</label>
      <Comment num={props.num} />
    </section>
  );
}

export default Post;
