import React from 'react';
import Comment from "./Comment"
function CommentBlock(){
    return(
        <section className="about">
            <p>Тратата</p>
            <input type="checkbox" id="hd-3" className="hide"/>
            
                <label for="hd-3" >Комментарии</label>
		        <div>
                <Comment num="1"/>
                </div>
                
                
        </section>
    )
}

export default CommentBlock;