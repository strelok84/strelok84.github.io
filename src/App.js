import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Post from "./components/Post";


function App() {
  let birthDate = new Date(1984, 8, 27);
  return (
    <body>
      <div className="container">
        <Header />
        <main>
          <Post num="0" hd="hd-1">
            <p>
              Немного о себе:
              <br />
              Мне{" "}{Math.floor((new Date().getTime() - new Date(birthDate)) / (24 * 3600 * 365.25 * 1000))}{" "}лет.
              <span itemProp="address"> Я живу в Самаре. </span>
              <span itemProp="alumniOf">
                У меня экономическое образование(alma mater - УрГЭУ) и я работаю
                менеджером на складе.
              </span>
              <span>
                {" "}
                Занимаюсь спортом (железо и бег), люблю читать и развиваться. В
                данный момент я увлекаюсь фронтенд-разработкой. Этот сайт
                пробная страничка для отработки разных навыков.
              </span>
            </p>
          </Post>
          <Post num="1" hd="hd-4">
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
          </Post>
          <Post num="2" hd="hd-3">
            <p>
              Сделал небольшое погодное приложение, опять-таки на React
              <br />
              Определяет местоположение пользователя на основе данных
              navigator.geolocation (или вручную). Данные тянет по API с
              metaweather.com
              <br />
              <a href="https://streloc84.github.io/weather/">
                https://streloc84.github.io/weather/
              </a>
            </p>
          </Post>
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default App;
