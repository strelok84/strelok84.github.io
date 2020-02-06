import React from 'react';
import Comment from "./Comment";

function CommentBlock(){
    return(
        <section className="about">
            <p>Тратата</p>
            <input type="checkbox" id="hd-3" className="hide"/>
            <label htmlFor="hd-3" >Комментарии</label>
		    <Comment num="2" />
        </section>
    )
}

export default CommentBlock;