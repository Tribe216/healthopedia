import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';

export const AgeSelect = ({handleChange, currentValue}) => (
  <FormSelect 
    name="age"
    handleChange={handleChange}
    values= { Array(110).fill().map((_, i) => i.toString()) }
    currentValue={currentValue}
  />
)

export const SexSelect = ({handleChange, currentValue}) => (
  <FormSelect 
    name="sex"
    handleChange={handleChange}
    values= {['male', 'female']}
    currentValue={currentValue}
  />
)

const FormSelect= ({name, values, handleChange, currentValue}) => (
  <SelectStyle
    onChange={handleChange}
    name={name}
    value={currentValue}
  >
    { values.map( (value, i) => (
      <option 
        key={i} 
        value={value}
      >
        {value}
      </option>
    )) }
  </SelectStyle>
)

const SelectStyle = styled.select`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: sans-serif;
  border: none;
  color: teal;
  background: ${colors.lightMint};
  text-align: center;
`