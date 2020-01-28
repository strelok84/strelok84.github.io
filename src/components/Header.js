import React from 'react';

function Header(){
    return(
        <header className="container__header">
            <p className="container__hello">Привет! Меня зовут Андрей и я увлекаюсь фронтенд-разработкой</p>
            
            <div className="container__selfie"> 
                
                <img className="img__selfie" src="img/selfie.jpg" srcset="img/selfie.webp"/>
            </div>
        </header>
    )
}

export default Header;