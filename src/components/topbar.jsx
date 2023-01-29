import React from 'react';
import "./../styles/components/topBar/topbar.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  const modal = () => {

  }

  document.addEventListener('click', (event) => {
    // event.preventDefault();
    let toggle = document.getElementById('toggle');
    if (toggle) {

      if (event.target.id === 'openFav') {
        if (!toggle.classList.contains('show')) {
          toggle.style.animation = '.4s ease open forwards';
          toggle.style.boxShadow = '0 0 3px 2px #1010105b'
          toggle.classList.add('show');
          return;
        }
        else {
          toggle.classList.remove('show');
          toggle.style.animation = '.4s ease close forwards';
          toggle.style.boxShadow = ''
          return
        }
      }
      else if (event.target.id !== 'toggle' && toggle.classList.contains('show')) {
        toggle.classList.remove('show');
        toggle.style.animation = '.4s ease close forwards';
        toggle.style.boxShadow = ''
      }
    }
  });
  return (
    <div className="">

      <div className="btnsComt">
        <div className="rela">
          <div className="flx">
            <div className='btnsCont'>
              <button id='openFav' className="btnL">
                Favoritos
                <FontAwesomeIcon className='icon' icon={faBookmark} />
              </button>
              <button className="btnR" onClick={e => { modal() }}>
                Agregar
                <FontAwesomeIcon className='icon' icon={faUserPlus} />
              </button>
            </div>
          </div>
          <div className="listCont" id='toggle'>

          </div>
        </div>
      </div>
      <div className="modalBack" id='backModal'>
        <div className="modal" id='modal'>
          <div className="modalCont">
            <div className="rowCont">
              <h3>Agrega un personaje</h3>
            </div>
            <form action="">
              <div className="rowCont">
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">Nombre</label>
                  <input type="text" className="input" />
                </div>
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">Cumpleaños</label>
                  <input type="date" className="input" />
                </div>
              </div>
              <div className="rowCont">
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">Color de ojos</label>
                  <input type="text" className="input" />
                </div>
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">Color de pelo</label>
                  <input type="text" className="input" />
                </div>
              </div>
              <div className="rowCont">
                <div className="inpHalf">
                  <label htmlFor="mujer" className="">Mujer</label>
                  <input type="radio" id="mujer" name="genero" value="mujer" />
                  <label htmlFor="hombre" className="">Hombre</label>
                  <input type="radio" id="hombre" name="genero" value="hombre" />
                </div>
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">Color de pelo</label>
                  <input type="text" className="input" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
export default TopBar;