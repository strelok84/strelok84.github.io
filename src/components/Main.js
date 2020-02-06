import React from 'react';
import Comment from "./Comment"

function Main(){
    return(
        <div>
            <section className="about" itemscope itemtype="http://schema.org/Person">
                <p>
                    Немного о себе:<br />
                    Мне 35 лет. 
                    <span itemprop="address"> Я живу в Самаре.</span>
                    <span itemprop="alumniOf"> У меня экономическое образование(alma mater - УрГЭУ) и я работаю менеджером на складе.</span> 
                     Занимаюсь спортом (железо и бег), люблю читать и развиваться.
                    В данный момент я увлекаюсь фронтенд-разработкой. Этот сайт пробная страничка для отработки разных навыков.
                </p>
                <input type="checkbox" id="hd-1" class="hide"/>
                <label for="hd-1" >Комментарии</label>
		        <div id="sigCommentsBlock">
                    <Comment num="0"/>
                </div>
                
            </section>
            <section className="about">
                 <p>Основная модель по которой я развиваюсь:</p>
                <input type="checkbox" id="hd-2" class="hide"/>
                <label for="hd-2" >Roadmap от уважаемого <a href="https://github.com/kamranahmedse/kamranahmedse.github.io">kamranahmedse</a></label>
                <div>
                <img src="img/frontendScheme.png" alt="схема_развития" class="scheme__about" srcset="img\frontendScheme.webp" />
                </div>      
            </section>    
        </div>
    )
}

export default Main;