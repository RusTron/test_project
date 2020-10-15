import React from 'react';
import './SelectField.scss';

export const SelectField = ({selectedValue, setSelectedValue}) => {

  return (
    <select 
      className="selector"
      value={selectedValue}
      onChange={({target})=>setSelectedValue(target.value)}>
      <option value={'Банковская карта'} className="selector__option">
        Банковская карта
      </option>
      <option value={'Биткоин'} className="selector__option">
        Биткоин
      </option>
      <option value={'Выставить счет'} className="selector__option">
        Выставить счет
      </option>
    </select>
  )
}
