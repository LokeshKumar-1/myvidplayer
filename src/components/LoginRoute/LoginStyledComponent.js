import Styled from 'styled-components'

export const LoginParentContainer = Styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: "Roboto";
  background-color: ${props => props.bgColor};
`

export const LoginFormContainer = Styled.form`
  height: fit-content;
  width: 500px;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => props.cardBgColor};
    @media screen and (max-width: 767px) {
    width: 100%;
    }
  `

export const LoginImageEl = Styled.img`
    width: 150px;
    align-self: center;
`
export const InputItemContainer = Styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 35px;
`
export const InputLabelEl = Styled.label`
    color: ${props => props.colorForLabelEl};
    margin-bottom: 0px;
`

export const InputInputEl = Styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-top: 5px;
    padding: 10px;
    outline: none;
    color: ${props => props.colorForInputEl};
    background-color: transparent;
`

export const ShowPassContainer = Styled.div`
    display: flex;
    align-items: center;
`

export const CheckboxInputEl = Styled.input`
    width: 19px;
    height: 19px;
`
export const ShowPassItem = Styled.label`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#000000' : '#f8fafc'};
    margin-left: 8px;
`
export const LoginButton = Styled.button`
    height: 50px;
    border: none;
    background-color: #3b82f6;
    color: #ffffff;
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
     @media screen and (max-width: 767px) {
        height: 40px;
    }
`

export const ErrorMsgEl = Styled.p`
    color:  #ff0b37;
    margin-bottom: 0px;
`
