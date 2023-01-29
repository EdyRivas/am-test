import React from 'react';
import "./../styles/components/topBar/topbar.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {

  document.addEventListener('click', (event) => {
    let toggle = document.getElementById('toggle');
    if (event.target.id === 'openFav') {
      if (!toggle.classList.contains('show')) {
        toggle.style.animation = '.4s ease open forwards';
        toggle.classList.add('show');
        return;
      }
      else {
        return
      }
    }
    if (toggle)
      if (event.target.id !== 'toggle' && toggle.classList.contains('show')) {
        toggle.classList.remove('show');
        toggle.style.animation = '.4s ease close forwards';
      }
  });
  return (
    <div className="btnsComt">
      <div className="rela">
        <div className="flx">
          <div className='btnsCont'>
            <button id='openFav' className="btnL">
              Favoritos
              <FontAwesomeIcon className='icon' icon={faBookmark} />
            </button>
            <button className="btnR">
              Agregar
              <FontAwesomeIcon className='icon' icon={faUserPlus} />
            </button>
          </div>
        </div>
        <div className="listCont" id='toggle'>

        </div>
      </div>
    </div>
  )
}
export default TopBar;