import React,{useState} from 'react';
import Modal from 'react-modal'
import {button} from 'react-bulma-components'
import './Modal.css';

function Example() {
const [modaIsopen, setModelIsOpen] =useState(false)
  return (
    <div className='Example'>
      <button onClick={() => setModelIsOpen(true)} >open</button>
        <Modal  isOpen={modaIsopen} style={{
          overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '100px',
          left: '400px',
          right: '400px',
          bottom: '100px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          outline: 'none',
          padding: '20px'
        }
        }}>
        <div class="modal fade">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header" >
        <button id="elementID" type="button"  class="close" data-dismiss="modal"  aria-label="Close" onClick={() => setModelIsOpen(false)}>
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <h1>Title</h1>
        </div>
        </div>
        </div>
      </div>
      </Modal>
      </div>
  
  );
}


export default Example;
