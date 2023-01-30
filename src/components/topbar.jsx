import { React, useState } from 'react';
import "./../styles/components/topBar/topbar.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faUserPlus, faClose } from '@fortawesome/free-solid-svg-icons'
import database from './../adapters/database.json'


const TopBar = () => {

  const [form, setForm] = useState([])

  const evidenceUpload = () => {
    setTimeout(() => {
      document.getElementById('imgInput').click();
    }, 25);
  }
  const getImage = () => {
    let evidence = document.getElementById('imgInput');
    let img = evidence.files[0];
    if (img != null) {
      let imageTag = document.getElementById('img');
      let fileReader = new FileReader();
      fileReader.readAsDataURL(img);
      fileReader.addEventListener("load", function () {
        imageTag.src = this.result;

      })
      return true;

    } else {
      return false
    }
  }

  const openModal = () => {
    let modal = document.getElementById('modal');
    let back = document.getElementById('backModal');
    modal.style.transform = 'scaleX(0) scale(.2)';
    back.style.display = 'flex';
    setTimeout(function () {
      modal.style.transform = 'scaleX(1) scaleY(.2)';
      setTimeout(function () {
        modal.style.transform = 'scaleX(1) scaleY(1)';
      }, 300)
    }, 300)
  }

  const closeModal = () => {
    let modal = document.getElementById('modal');
    let back = document.getElementById('backModal');
    modal.style.transform = 'scaleX(1) scaleY(.2)';
    setTimeout(function () {
      modal.style.transform = 'scaleX(0) scaleY(.2)';
      setTimeout(function () {
        back.style.display = 'none';
      }, 300)
    }, 300)
  }

  const save = (e) => {
    e.preventDefault();

    if (form.student === true) {
      database.students.push(form)
    } else {
      database.staff.push(form);
    }
    closeModal()
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
              <button className="btnR" onClick={e => { openModal() }}>
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
            <div className="btnCon">

              <FontAwesomeIcon className="btnClose" onClick={e => { closeModal() }} icon={faClose} />

            </div>
            <div className="rowContModal title">
              <h3>Agrega un personaje</h3>
            </div>
            <form onSubmit={save}>
              <div className="rowContModal">
                <div className="inpHalf">
                  <label className="lblUp">NOMBRE</label>
                  <input type="text" className="input" onChange={(e) => setForm(
                    {
                      ...form,
                      name: e.target.value,
                    }
                  )}
                    required />
                </div>
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">CUMPLEAÑOS</label>
                  <input type="date" className="input" onChange={(e) => setForm(
                    {
                      ...form,
                      dateOfBirth: e.target.value,
                    }
                  )}
                    required />
                </div>
              </div>
              <div className="rowContModal">
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">COLOR DE OJOS</label>
                  <input type="text" className="input" onChange={(e) => setForm(
                    {
                      ...form,
                      eyeColour: e.target.value,
                    }
                  )}
                    required />
                </div>
                <div className="inpHalf">
                  <label htmlFor="" className="lblUp">COLOR DE PELO</label>
                  <input type="text" className="input" onChange={(e) => setForm(
                    {
                      ...form,
                      hairColour: e.target.value,
                    }
                  )}
                    required />
                </div>
              </div>
              <div className="rowContModal">
                <div className="one">
                  <div>
                    <div className="flx jcc">
                      <div className="btnImg" onClick={e => { evidenceUpload() }}>
                        <img alt='' id="img" className="imgPicker" src="https://i.imgur.com/STqcWIy.png" />
                      </div>
                      <input onChange={e => { getImage() }} className="none" type="file" id="imgInput" accept="image/png, image/jpeg" hidden />
                    </div>
                  </div>
                  <img alt='' id="imgAux" className="imgEvidence" src="https://i.imgur.com/STqcWIy.png" hidden />
                </div>
              </div>
              <div className="rowContModal">
                <div className="one">
                  <hr />
                </div>
              </div>
              <div className="rowContModal">
                <div className="inpHalf ">
                  <label htmlFor="" className="lblUp">GENERO</label>
                  <div className="flx">

                    <div className="inpHalf">
                      <label htmlFor="mujer" className="">Mujer</label>
                      <input type="radio" id="mujer" name="genero" value="mujer" onChange={(e) => setForm(
                        {
                          ...form,
                          gender: e.target.value,
                        }
                      )} />
                    </div>
                    <div className="inpHalf">
                      <label htmlFor="hombre" className="">Hombre</label>
                      <input type="radio" id="hombre" name="genero" value="hombre" onChange={(e) => setForm(
                        {
                          ...form,
                          gender: e.target.value,
                        }
                      )} />
                    </div>
                  </div>
                </div>
                <div className="inpHalf ">
                  <label htmlFor="" className="lblUp">POSISION</label>
                  <div className="flx">
                    <div className="inpHalf">
                      <label htmlFor="stude" className="">Estudiante</label>
                      <input type="radio" id="stude" value="true" onChange={(e) => setForm(
                        {
                          ...form,
                          student: e.target.value,
                        }
                      )} />
                    </div>
                    <div className="inpHalf">
                      <label htmlFor="staff" className="">Staff</label>
                      <input type="radio" id="staff" value="false" onChange={(e) => setForm(
                        {
                          ...form,
                          student: e.target.value,
                        }
                      )} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rowContModal">
                <div className="one">
                  <button type="submit" value="Submit" className="btnSave">
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}
export default TopBar;