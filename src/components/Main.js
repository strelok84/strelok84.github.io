import React from "react";
import Comment from "./Comment";

function Main() {
  return (
    <div>
      <section className="about" itemScope itemType="http://schema.org/Person">
        <p>
          Немного о себе:
          <br />
          Мне 35 лет.
          <span itemProp="address"> Я живу в Самаре.</span>
          <span itemProp="alumniOf">
            {" "}
            У меня экономическое образование(alma mater - УрГЭУ) и я работаю
            менеджером на складе.{" "}
          </span>
          Занимаюсь спортом (железо и бег), люблю читать и развиваться. В данный
          момент я увлекаюсь фронтенд-разработкой. Этот сайт пробная страничка
          для отработки разных навыков.
        </p>
        <input type="checkbox" id="hd-1" className="hide" />
        <label htmlFor="hd-1">Комментарии</label>

        <Comment num="0" />
      </section>
      <section className="about">
        <p>Основная модель по которой я развиваюсь:</p>
        <input type="checkbox" id="hd-2" className="hide" />
        <label htmlFor="hd-2">
          Roadmap от уважаемого{" "}
          <a href="https://github.com/kamranahmedse/kamranahmedse.github.io">
            kamranahmedse
          </a>
        </label>
        <div>
          <img
            src="img/frontendScheme.png"
            alt="схема_развития"
            className="scheme__about"
            srcSet="img\frontendScheme.webp"
          />
        </div>
        <input type="checkbox" id="hd-4" className="hide" />
        <label htmlFor="hd-4">Комментарии</label>
        <Comment num="1" />
      </section>
    </div>
  );
}

export default Main;
