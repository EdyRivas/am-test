import React from 'react';
import './../styles/components/homeComponent/homeComponent.sass'
import database from './../adapters/database.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Cards = () => {
  console.log(database)
  let a = []
  database.characters.forEach((character) => {
    let idCompuesta = character.actor.split(' ').join;
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
                {character.alive ? 'VIVO' : 'FINADO'}/{character.hogwartsStudent ? 'ESTUDIANTE' : 'STAFF'}
              </p>
              <FontAwesomeIcon onClick='favClick()' className='icon' icon={faBookmark} id={'icon-' + idCompuesta} />
            </div>
            <div className="rowCont jcc">
              <h1 className='name'>{character.name}</h1>
            </div>
            <div className="rowCont">
              <p className="bold">Cumpleaños:</p>
              <p>data</p>
            </div>
            <div className="rowCont">
              <p className="bold">Genero:</p>
              <p>data</p>
            </div>
            <div className="rowCont">
              <p className="bold">Color de ojos:</p>
              <p>data</p>
            </div>
            <div className="rowCont">
              <p className="bold">Color de pelo:</p>
              <p>data</p>
            </div>
          </div>
        </div>
      </div>


    )
  })
  return (
    <div className="contGen">
      <div className='buttonsSec'>
        <button className='bnt'>ESTUDIANTES</button>
        <button className='btnSt'>STAFF</button>
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