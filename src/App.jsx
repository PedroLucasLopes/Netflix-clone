import React from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { MainContent } from './Components/MainContent/MainContent';
import { Slider } from './Components/Slider/Slider';
import { Footer } from './Components/Footer/Footer';

import cuphead from './assets/Medias/cuphead.jpg';
import gilmoreGirls from './assets/Medias/gilmoreGirls.jpg';
import onePiece from './assets/Medias/onePiece.jpg';
import breakingBad from './assets/Medias/breakingBad.jpg';
import bomDiaVeronica from './assets/Medias/bomDiaVeronica.jpg';
import betterCallSaul from './assets/Medias/betterCallSaul.jpg';
import advogadaExtraordinaria from './assets/Medias/advogadaExtraordinaria.jpg';
import brooklyn from './assets/Medias/brooklyn.jpg';

import allOfUs from './assets/Medias/slides/allOfUs.jpeg';
import atlanta from './assets/Medias/slides/atlanta.jpg';
import atypical from './assets/Medias/slides/atypical.jpeg';
import chihiro from './assets/Medias/slides/chihiro.jpg';
import cidadeInvisivel from './assets/Medias/slides/cidadeInvisivel.jpeg';
import dark from './assets/Medias/slides/dark.jpeg';
import deVolta from './assets/Medias/slides/deVolta.jpeg';
import evangelion from './assets/Medias/slides/evangelion.jpg';

import lucifer from './assets/Medias/slides-01/lucifer.jpeg';
import mononoke from './assets/Medias/slides-01/mononoke.jpg';
import naruto from './assets/Medias/slides-01/naruto.jpg';
import peakyBlinders from './assets/Medias/slides-01/peakyBlinders.jpeg';
import pontoCego from './assets/Medias/slides-01/pontoCego.jpg';
import sexEducation from './assets/Medias/slides-01/sexEducation.jpeg';
import strangerThings from './assets/Medias/slides-01/strangerThings.jpeg';
import whiplash from './assets/Medias/slides-01/whiplash.jpg';

import './App.css';

function App() {
  const movies = [
    cuphead,
    gilmoreGirls,
    onePiece,
    breakingBad,
    bomDiaVeronica,
    betterCallSaul,
    advogadaExtraordinaria,
    brooklyn
  ]

  const slides = [
    allOfUs,
    atlanta,
    atypical,
    chihiro,
    cidadeInvisivel,
    dark,
    deVolta,
    evangelion
  ]

  const slidesOne = [
    lucifer,
    mononoke,
    naruto,
    peakyBlinders,
    pontoCego,
    sexEducation,
    strangerThings,
    whiplash
  ]

  const slidesTwo = [
    sexEducation,
    strangerThings,
    gilmoreGirls,
    brooklyn,
    naruto,
    betterCallSaul,
    pontoCego,
    mononoke
  ]

  return (
    <>
      <Navbar />
      <MainContent />
      <Slider slide={movies} title={"Populares na Netflix"} />
      <Slider slide={slides} title={"Em alta"} />
      <Slider slide={slidesOne} title={"Séries dramáticas"} />
      <Slider slide={slidesTwo} title={"Obras de época"} />
      <Footer />
    </>
  )
}

export default App;
