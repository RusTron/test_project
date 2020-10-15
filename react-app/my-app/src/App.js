import React, { useState } from 'react';
import { Modal } from './Modal';
import 'typeface-montserrat';
import './App.scss';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <button className="modal-button" onClick={()=>setModalVisible(true)}>
        <span className="modal-button__text">Открыть модалку</span>
      </button>
      {modalVisible && (
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      )}
      </header>
    </div>
  );
}

export default App;
