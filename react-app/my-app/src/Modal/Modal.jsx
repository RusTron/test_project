import React, {useState, useEffect, Component} from 'react';
import { Timer } from './components/Timer';
import { Boxes } from './components/Boxes';
import { SelectField } from './components/SelectField';
import { notification } from 'antd';
import close from '../images/close.svg';
import 'antd/dist/antd.css';
import './Modal.scss';


export const Modal = ({setModalVisible}) => {
  const [checked, setChecked] = useState('0');
  const [selectedValue, setSelectedValue] = useState('Банковская карта');

  const openNotificationWithIcon = type => {
    type === 'info'
      ? notification['info']({
        message: 'Операция не доступна',
        description:
          'Выберите, пожалуйста, сумму пополнения',
      })
      : notification['success']({
        message: 'Операция выполнена успешно!',
        description:
          `Способ оплаты: ${selectedValue}. `
          + `На ваш счет будет зачисленно $${checked}`,
      });
    setChecked('0')
  };

  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
        setModalVisible(false)
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div 
      className="container"
    >
      <div className="modal">
        <div className="modal__bonus">
          <span className="modal__bonus-text">+100%</span>
        </div>
        <button 
          className="modal__close"
          onClick={()=>setModalVisible(false)}
        >
          <img src={close} className="modal__close-image"></img>
        </button>
        <Timer />
        <div className="modal__header">
          <h1>Увеличьте свой депозит!</h1>
        </div>
        <div className="modal__selector">
          <SelectField 
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
        < Boxes checked={checked} setChecked={setChecked}/>
        <div className="modal__total">
          <span className="modal__total-normal">{`$${checked},`}</span>
          <span className="modal__total-small">00</span>
          <span> будет зачисленно вам на счет</span>
        </div>
        <div className="modal__button">
          <div className="modal__button-light"></div>
          <button 
            className="modal__button-submit"
            onClick={() => checked === '0'
              ? openNotificationWithIcon('info')
              : openNotificationWithIcon('success')
            }
          >
            <span>Пополнить</span>
          </button>
        </div>
        <div className="modal__description">
          <span>При пополнении счета с банковской карты списание средств
            <br/>происходит по курсу банка клиента
            <br/>
          </span>
          <span className="modal__description-details">ПОДРОБНЕЕ</span>
        </div>
      </div>
    </div>
  )
}
