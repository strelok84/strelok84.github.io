import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Main from "./components/Main";
import Post from "./components/Post";



function App() {
  return (
    <body>
      <div className="container">
        <Header />
        <main>
          <Main />
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
