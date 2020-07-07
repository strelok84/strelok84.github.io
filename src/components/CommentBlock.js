import React from 'react';
import Comment from "./Comment";

function CommentBlock(){
    return(
        <section className="about">
            <p>Сделал небольшое погодное приложение, опять-таки на React<br />
               Определяет местоположение пользователя на основе данных navigator.geolocation (или вручную). Данные тянет по API с metaweather.com<br />
               <a href="https://streloc84.github.io/weather/">https://streloc84.github.io/weather/</a><br />
               

            </p>
            <div></div>
            <input type="checkbox" id="hd-3" className="hide"/>
            <label htmlFor="hd-3" >Комментарии</label>
		    <Comment num="2" />
        </section>
    )
}

export default CommentBlock;