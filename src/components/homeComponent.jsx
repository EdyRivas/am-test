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
const Cards = () => {
  console.log(database)

  let a = []
  database.characters.forEach((character) => {
    let idCompuesta = character.actor.split(' ').join('');
    let icon = 'icon-' + idCompuesta
    a.push(
      <div className="half">
        <div className="cart">
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
              <h1 className='name'>{character.name}</h1>
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
            <button className='bntStu'>ESTUDIANTES</button>
          </div>
          <div className="btnHalf left">
            <button className='btnSt'>STAFF</button>
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