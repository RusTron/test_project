import React from 'react';
import classNames from 'classnames';
import './Boxes.scss';

export const Boxes = ({checked, setChecked}) => {

  return (
    <div className="boxes">
      <div 
        className={ classNames("box",{ 'box__large': checked === '100' })}
        onClick={()=>setChecked('100')}
      >
        <div className="box__title">
          <span className="box__title-text">Пополнить на</span>
          <span className="box__title-sum">{'$ 50'}</span>
        </div>
        <div className="box__main">
          <span className="box__main-text">Получить</span>
          <span className="box__main-sum">{'$ 100'}</span>
        </div>
        <input id="radio50" className="box__radio"
          type="radio" name="radio-group"
          onChange={()=>setChecked('100')}
          checked={checked === '100'}
        />
        <label htmlFor="radio50"className="box__radio-label"></label>
      </div>

      <div 
        className={ classNames("box",{ 'box__large': checked === '200' })}
        onClick={()=>setChecked('200')}
      >
        <div className="box__title">
          <span className="box__title-text">Пополнить на</span>
          <span className="box__title-sum">{'$ 100'}</span>
        </div>
        <div className="box__main">
          <span className="box__main-text">Получить</span>
          <span className="box__main-sum">{'$ 200'}</span>
        </div>
        <input id="radio" className="box__radio"
          type="radio" name="radio-group"
          onChange={()=>setChecked('200')}
          checked={checked === '200'}
        />
        <label htmlFor="radio"className="box__radio-label"></label>
      </div>

      <div 
        className={ classNames("box",{ 'box__large': checked === '1000' })}
        onClick={()=>setChecked('1000')}
      >
        <div className="box__title">
          <span className="box__title-text">Пополнить на</span>
          <span className="box__title-sum">{'$ 500'}</span>
        </div>
        <div className="box__main">
          <span className="box__main-text">Получить</span>
          <span className="box__main-sum">{'$ 1000'}</span>
        </div>
        <input id="radio500" className="box__radio"
          type="radio"  name="radio-group"
          onChange={()=>setChecked('1000')}
          checked={checked === '1000'}
        />
        <label htmlFor="radio500"className="box__radio-label"></label>
      </div>
    </div>
  )
}
