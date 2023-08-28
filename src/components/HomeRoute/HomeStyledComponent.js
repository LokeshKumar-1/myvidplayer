import Styled from 'styled-components'

export const HomeParentContainer = Styled.div`
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
export const SideMenuForSmallDevice = Styled.div`
    height: 70vh;
    width: 100%;
    flex-shrink: 0;
    background-color: pink;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const SideMenuForLargeDevice = Styled.div`
    height: 100%;
    width: 20%;
     flex-shrink: 0;
    @media screen and (max-width: 767px) {
        display: none;
    }

`
export const HomeContentContainer = Styled.div`
    width: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
     overflow-y: auto;
    @media screen and (max-width: 767px) {
        height: 100vh;
    }
`

export const PremiumBannerContainer = Styled.div`
    background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
    height: 300px;
    width: 100%;
    padding: 20px;
    background-size: cover;
    background-color: pink;
    color: #7e858e;
    display: flex;
    flex-direction: column;

`
export const PremiumBannerHeading = Styled.h1`
    margin-top: 20px;
    padding: 0px;
    font-size: 20px;
    width: 450px;
    @media screen and (max-width: 767px) {
        width: 100%;
        font-size: 15px;
    }
`
export const HomeLogoEl = Styled.img`
    width: 150px;
`
export const GetNowButton = Styled.button`
    height: 50px;
    width: 150px;
    border: 1px solid #7e858e;
    background-color: transparent;
    color: #7e858e;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
     @media screen and (max-width: 767px) {
        height: 40px;
        width: 100px;
    }
`
export const HomeCrossBtnEl = Styled.button`
    font-size: 20px;
    align-self: flex-end;
    border: none;
    background-color: transparent;
    color: ${props => props.colorForText};
    cursor: pointer;
    outline: none;
    margin-right: 15px;
    @media screen and (max-width: 767px) {
        margin: 0px;
    }
`
export const HomeListAndSearchContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
    height: fit-content;
`

export const SearchContainer = Styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    height: 50px;
    border: 1px solid ${props =>
      props.selectedTheme === 'LIGHT' ? '#424242' : '#d7dfe9'};
    margin: 0px;
     @media screen and (max-width: 767px) {
        width: 90%;
        margin: 15px 5px 15px 5px;
        height: 40px;
    }
`

export const SearchInputEl = Styled.input`
        padding: 10px;
        width: 85%;
        height: 100%;
        border: none;
        outline: none;
        background-color: transparent;
         color: ${props =>
           props.selectedTheme === 'LIGHT' ? '#606060' : '#cbd5e1'};
`

export const SearchIconEl = Styled.button`
        width: 15%;
        background-color: ${props =>
          props.selectedTheme === 'LIGHT' ? '#cbd5e1' : '#7e858e'};
        color: ${props =>
          props.selectedTheme === 'LIGHT' ? '#606060' : '#cbd5e1'};
        font-size: 18px;
        border: none;
        outline: none;
        cursor: pointer;
        height: 100%;
        margin: 0px;
`

export const UnOrderListContainer = Styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
`
export const EmptyListContainer = Styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-family: "Roboto";
`

export const NoListImage = Styled.img`
    width: 400px;
    @media screen and (max-width: 767px) {
        width: 300px;
    }
`
export const NoListTitle = Styled.h1`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#231f20' : '#ffffff'};
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 767px) {
        font-size: 25px;
        text-align: center;
    }
`
export const NoListPara = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#7e858e' : '#ebebeb'};
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 17px;
        text-align: center;
    }
`
export const RetryBtn = Styled.button`
    height: 50px;
    width: 100px;
    color: #ffffff;
    background-color: #3b82f6;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`
