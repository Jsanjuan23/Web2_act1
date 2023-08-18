import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Card = (props) => {
  return (
    <div class="container">
    <div class="row">
    
        <div class="col-sm-4">
        <div class="card" id="targ">
          <img class="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/410/227/670/dragon-ball-super-son-goku-ultra-instinct-goku-kamehameha-wallpaper-preview.jpg" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Gokú - Ultra Instinto</h5>
            <p align="right">Contador: {props.count}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-light">Detalle</button>
          </div>
        </div>
        </div>

        <div class="col-sm-4">
        <div class="card" id="targ">
          <img class="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/859/13/76/dragon-ball-bulma-dragon-ball-dragon-ball-z-goku-wallpaper-thumb.jpg" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Gokú - Niño</h5>
            <p align="right">Contador: {props.count}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-light">Detalle</button>
          </div>
        </div>
        </div>

        <div class="col-sm-4">
        <div class="card" id="targ">
          <img class="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/357/204/1021/dragon-ball-z-super-saiyan-son-goku-video-games-wallpaper-thumb.jpg" alt="Card image cap" ></img>
          <div class="card-body">
            <h5 class="card-title">Gokú - Sayayín</h5>
            <p align="right">Contador: {props.count}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-light">Detalle</button>
          </div>
        </div>
        </div>
       
      
        <div class="col-sm-4">
        <div class="card" id="targ">
          <img class="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/128/263/584/son-goku-shiny-dragon-ball-dragon-ball-z-wallpaper-preview.jpg" alt="Card image cap" ></img>
          <div class="card-body">
            <h5 class="card-title">Son Gokú</h5>
            <p align="right">Contador: {props.count}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-light">Detalle</button>
          </div>
        </div>
        </div>

        <div class="col-sm-4">
        <div class="card" id="targ">
          <img class="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/27/890/343/dragon-ball-dragon-ball-super-son-goku-super-saiyan-blue-wallpaper-preview.jpg" alt="Card image cap" ></img>
          <div class="card-body">
            <h5 class="card-title">Gokú - Blue</h5>
            <p align="right">Contador: {props.count}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-light">Detalle</button>
          </div>
        </div>
        </div>

        <div class="col-sm-4">
        <div class="card" id="targ">
          <img class="img-fluid" src="https://c4.wallpaperflare.com/wallpaper/417/261/149/dragon-ball-z-son-goku-wallpaper-thumb.jpg" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Goku - Sayayin Fase 3</h5>
            <p align="right">Contador: {props.count}</p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-light">Detalle</button>
          </div>
        </div>
        </div>
       

      </div>
    </div>
  )
}

export default Card
