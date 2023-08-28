import Styled from 'styled-components'

export const SVParentContainer = Styled.div`
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
export const SVSideMenuForSmallDevice = Styled.div`
    height: 70vh;
    width: 100%;
    flex-shrink: 0;
    background-color: pink;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const SVSideMenuForLargeDevice = Styled.div`
    height: 100%;
    width: 20%;
     flex-shrink: 0;
    @media screen and (max-width: 767px) {
        display: none;
    }
`

export const SVContentContainer = Styled.div`
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
export const OtherBannerContainer = Styled.div`
    height: 130px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${props => props.bannerBgColor};
    padding: 0 0 0 40px;
    flex-shrink: 0;
    @media screen and (max-width: 767px) {
        height: 100px;
        padding: 0 0 0 20px;
    }
`
export const BannerLogoContainer = Styled.div`
    height: 80px;
    width: 85px;
    border-radius: 100px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#cbd5e1' : '#000000'};
    color: #ff0b37;
    font-size: 30px;
    @media screen and (max-width: 767px) {
        height: 60px;
        width: 60px;
        font-size: 22px;
    }
`
export const OtherBannerHeading = Styled.h1`
    font-family: "Roboto";
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#000000' : '#cbd5e1'};
    margin-left: 15px;
     @media screen and (max-width: 767px) {
        font-size: 22px;
    }
`
export const SVEmptyContainer = Styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-family: "Roboto";
`

export const SVEmptyImage = Styled.img`
    width: 400px;
    @media screen and (max-width: 767px) {
        width: 300px;
    }
`

export const SVEmptyTitle = Styled.h1`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#231f20' : '#ffffff'};
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 767px) {
        font-size: 25px;
        text-align: center;
    }
`

export const SVEmptyPara = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#7e858e' : '#ebebeb'};
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 17px;
        text-align: center;
    }
`
export const TrendingFailureRetryBtn = Styled.button`
    height: 50px;
    width: 100px;
    color: #ffffff;
    background-color: #3b82f6;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`

export const SVVideoList = Styled.ul`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0px;
    margin: 30px 0 0 0;
`
