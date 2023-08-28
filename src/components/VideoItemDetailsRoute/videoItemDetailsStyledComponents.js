import Styled from 'styled-components'

export const VideoDetailsParentContainer = Styled.div`
    height: 100vh;
    width: 100%;
    padding: 0px;
    display: flex;
    margin: 0px;
    justify-content: flex-start;
    background-color: ${props => props.homeBgColorForVideosContainer};
    overflow-y: auto;
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`
export const VideoDetailsSideMenuForSmallDevice = Styled.div`
    height: 70vh;
    width: 100%;
    flex-shrink: 0;
    background-color: pink;
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const VideoDetailsSideMenuForLargeDevice = Styled.div`
    height: 100%;
    width: 20%;
    flex-shrink: 0;
    @media screen and (max-width: 767px) {
        display: none;
    }
`
export const VideoDetailsFailureContainer = Styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-family: "Roboto";
`

export const VideoDetailsFailureImage = Styled.img`
    width: 400px;
    @media screen and (max-width: 767px) {
        width: 300px;
    }
`

export const VideoDetailsFailureTitle = Styled.h1`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#231f20' : '#ffffff'};
    font-weight: bold;
    font-size: 30px;
    @media screen and (max-width: 767px) {
        font-size: 25px;
        text-align: center;
    }
`

export const VideoDetailsFailurePara = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#7e858e' : '#ebebeb'};
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 767px) {
        font-size: 17px;
        text-align: center;
    }
`
export const VideoDetailsFailureRetryBtn = Styled.button`
    height: 50px;
    width: 100px;
    color: #ffffff;
    background-color: #3b82f6;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`

export const VideoDetailsContentContainer = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const VideoDetailsVideoContainer = Styled.div`
    width: 100%;
    height: 60vh;
`

export const VideoDetailsTitleEl = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#1e293b' : '#f1f5f9'};
    font-size: 20px;
    margin: 20px 0 20px 0;
`

export const VideoDetailsViews = Styled.p`
    color: #616e7c;
    margin-top: 10px;
`
export const VideoDetailsAboutVideoContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #616e7c;
    margin-top: 10px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`
export const ViewsAndDateContainer = Styled.div`
    display: flex;
    align-items: center;
`
export const LikeDislikeSaveContainer = Styled.div`
    display: flex;
    align-items: center;
    height: 50px;
     @media screen and (max-width: 767px) {
        margin-top: 20px;
    }
`

export const LikeDislikeSaveItem = Styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    outline: none;
    height: 50px;
    margin-right: 5px;
    font-weight: bold;
`

export const LikeDislikeSaveItemWord = Styled.p`
    margin: 0 0 0 5px;
    color: ${props => props.color};
`
export const HorizontalLine = Styled.hr`
    width: 100%;
    border: 1px solid #cccccc;
`
export const ChannelContainer = Styled.div`
    display: flex;
    margin-top: 25px;
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#1e293b' : '#f1f5f9'};
`
export const VideoDetailsChannelLogoImage = Styled.img`
    width: 50px;
    height: 60px;
`
export const VideoDetailsChannelNameAndSub = Styled.div`
    margin: 0 0 0 15px;
`
