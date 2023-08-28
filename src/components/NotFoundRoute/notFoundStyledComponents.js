import Styled from 'styled-components'

export const NotFoundParentContainer = Styled.div`
    height: 100vh;
    width: 100%;
    padding: 0px;
    display: flex;
    margin: 0px;
    justify-content: flex-start;
    background-color: ${props => props.homeBgColorForVideosContainer};
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`
export const NotFoundMenuForSmallDevice = Styled.div`
    height: 70vh;
    width: 100%;
    flex-shrink: 0;
    background-color: pink;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const NotFoundMenuForLargeDevice = Styled.div`
    height: 100%;
    width: 20%;
     flex-shrink: 0;
    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const NotFoundContentContainer = Styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-family: "Roboto";
`

export const NotFoundImage = Styled.img`
    width: 400px;
    @media screen and (max-width: 767px) {
        width: 300px;
    }
`

export const NotFoundTitle = Styled.h1`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#231f20' : '#ffffff'};
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 767px) {
        font-size: 25px;
        text-align: center;
    }
`

export const NotFoundPara = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#7e858e' : '#ebebeb'};
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 17px;
        text-align: center;
    }
`
