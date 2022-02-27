import React from 'react'
import Icon from './Cardwidget'

const Carrusel = () => {




  return <>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="4000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIl1_lI8q-qNufP4Wv3XfTh_CzgmJmVe9Jyw&usqp=CAU" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHWWWjMl2fJ9UvblW8-W1oFd1RgRLHclwGg&usqp=CAU" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item" data-bs-interval="4000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmI91AJcq58e5WyOAghqs-UcjdM0Qx0iYSg&usqp=CAU" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
      <img src="https://i.blogs.es/04b04a/maxresdefault-50/840_560.jpeg " class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </>
}

export default Carrusel
