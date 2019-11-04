import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { AgeSelect, SexSelect } from './FormElements';


class DemoSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {age: '18', sex: 'male'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increaseAge = this.increaseAge.bind(this);
    this.decreaseAge = this.decreaseAge.bind(this);
    this.cycleSex = this.cycleSex.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processDemographic(this.state.age, this.state.sex);
  }

  increaseAge() {
    let newAge = parseInt(this.state.age);

    if (newAge < 110) {
      newAge++;
    }
    this.setState({
      age:newAge.toString()
    })
  }

  decreaseAge() {
    let newAge = parseInt(this.state.age);

    if (newAge > 0) {
      newAge--;
    }
    this.setState({
      age: newAge.toString()
    })
  }

  cycleSex() {
    this.setState({
      sex: this.state.sex === 'male' ? 'female' : 'male'
    })
  }

  render() {
    return (
      <DemoSearchStyles>
        <h2>
          Welcome to Healthopedia!
        </h2>
        <h2>
          Please enter your age and sex below for personalized recommendations.
        </h2>
        <form onSubmit={this.handleSubmit}>
          <CaretContainer>
            <CaretBox>
              <FontAwesomeIcon icon={faCaretUp} onClick={this.increaseAge}/>
              <AgeSelect 
                handleChange={this.handleChange}
                currentValue={this.state.age}
              />
              <FontAwesomeIcon icon={faCaretDown} onClick={this.decreaseAge}/>
            </CaretBox>
            <Spacer />
            <CaretBox>
              <FontAwesomeIcon icon={faCaretUp} onClick={this.cycleSex}/>
              <SexSelect 
                handleChange={this.handleChange}
                currentValue={this.state.sex} 
              />
              <FontAwesomeIcon icon={faCaretDown} onClick={this.cycleSex}/>
            </CaretBox>
          </CaretContainer>
          <SubmitButton onClick={this.handleSubmit}>
            Go! <FontAwesomeIcon icon={faSearch} />
          </SubmitButton>
        </form>
      </DemoSearchStyles>
    );
  }
}

const DemoSearchStyles = styled.div`
  background: ${colors.lightMint};
  height: 100%;
  width: 100%;
`

const CaretContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14rem;
  margin: 0 auto;
`

const Spacer = styled.div`
  width: 1rem;
` 

const CaretBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 8rem;
  color: ${colors.teal}

  svg:hover {
    color: ${colors.darkTeal};
    cursor: pointer;
  }
`

const SubmitButton = styled.button`
  font-size: 2rem;
  padding: .5rem 5rem;
  display: block;
  background: ${colors.teal};
  color: ${colors.white};
  &:hover {
    background: ${colors.darkTeal};
    cursor: pointer;
  }
  border-radius: 10px;
  border: none;
  margin: 0 auto;
  text-align: center;
`

DemoSearch.propTypes = {
  searchByDemographic: PropTypes.func,
  updateResults: PropTypes.func
};


export default DemoSearch;
