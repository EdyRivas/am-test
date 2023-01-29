import React from 'react';
import './../styles/components/homeComponent/homeComponent.sass'
import database from './../adapters/database.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const click = (id) => {
  let icon = document.getElementById(id)
  let value = icon.value === '0' ? false : true;
  if (!value) {
    icon.style.color = '#333333';
    icon.value = '1';
  }
  else {
    icon.style.color = '#9999A2';
    icon.value = '0';
  }

}
const filterClick = (id) => {
  let btn = document.getElementById(id)
  if (!btn.classList.contains('clicked')) {
    if (id === 'est') {
      let sta = document.getElementById('sta')
      if (sta.classList.contains('clicked')) {
        sta.style.backgroundColor = ''
        sta.classList.remove('clicked')
      }
    } else {
      let est = document.getElementById('est')
      if (est.classList.contains('clicked')) {
        est.style.backgroundColor = ''
        est.classList.remove('clicked')
      }
    }
    btn.style.backgroundColor = '#6B63B5'
    btn.classList.add('clicked')
    // else {
    //   btn.style.backgroundColor = ''
    //   btn.classList.remove('clicked')
    // }
  }
}
const Cards = () => {
  console.log(database)

  let a = []
  database.characters.forEach((character) => {
    let idCompuesta = character.actor.split(' ').join('');
    let icon = 'icon-' + idCompuesta
    a.push(
      <div className="half">
        <div className={character.alive ? "cart" : "cart dead"}>
          <div className={character.house + ' imgcont'}>
            <div className="imgRadious">

              <img className='img' src={character.image} alt="" />
            </div>
          </div>
          <div className="rest">
            <div className="rowCont iconCont">
              <p className="smal">
                {character.alive ? 'VIVO ' : 'FINADO '}/{character.hogwartsStudent ? ' ESTUDIANTE' : ' STAFF'}
              </p>
              <button id={icon} onClick={(e) => { click(icon) }} className='btnFav' value='0'>
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
            <div className="rowCont jcc">
              <h1 className='name'>{character.alive ? '' : '✞ '}{character.name}</h1>
            </div>
            <div className="rowCont">
              <p className="bold">Cumpleaños:</p>
              <p className="data">{character.dateOfBirth = character.dateOfBirth !== '' ? character.dateOfBirth : 'Desconosido'}</p>
            </div>
            <div className="rowCont">
              <p className="bold">Genero:</p>
              <p className="data">{character.gender.charAt(0).toUpperCase() + character.gender.slice(1)}</p>
            </div>
            <div className="rowCont">
              <p className="bold">Color de ojos:</p>
              <p className="data">{character.eyeColour.charAt(0).toUpperCase() + character.eyeColour.slice(1)}</p>
            </div>
            <div className="rowCont">
              <p className="bold">Color de pelo:</p>
              <p className="data">{character.hairColour.charAt(0).toUpperCase() + character.hairColour.slice(1)}</p>
            </div>
          </div>
        </div>
      </div>


    )
  })
  return (
    <div className="contGen">
      <div className='buttonsSec'>
        <div className="imgCont">
          <img className='hTit' src="https://i.imgur.com/c9RjklN.png" alt="" />
        </div>
        <div className="buttons">
          <div className="btnHalf right">
            <button id='est' className='bntStu' onClick={(e) => { filterClick('est') }} >ESTUDIANTES</button>
          </div>
          <div className="btnHalf left">
            <button id='sta' className='btnSt' onClick={(e) => { filterClick('sta') }}>STAFF</button>
          </div>
        </div>
      </div>
      <div className="takeRest">
        <div className="cont">
          {a}
        </div>
      </div>
    </div>
  )
}
export default Cards;