import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TAndSParentContainer = Styled.li`
    height: fit-content;
    width: 100%;
    display: flex;
    background-color: transparent;
    margin: 15px 15px 0px 0px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center
        width: 90%;
        margin: 10px 0px 10px 0px;
    }
`

export const TAndSImageEl = Styled.img`
    width: 350px;
    height: 250px;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`
export const TAndSProfileContainer = Styled.div`
    width: 100%;
    display: flex;
    margin: 10px;
`

export const TAndSChannelLogoImage = Styled.img`
    width: 40px;
    height: 50px;
`

export const TAndSContentContainer = Styled.div`
    width: 80%;
    margin-left: 10px;
`

export const TAndSTitleEl = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#1e293b' : '#f1f5f9'};
    font-size: 15px;
    margin: 0px;
`

export const TAndSChannelName = Styled.p`
    color: #616e7c;
    margin-top: 10px;
`
export const TAndSAboutVideoContainer = Styled.div`
    display: flex;
    align-items: center;
    color: #616e7c;
    margin-top: 0px;
`

export const TAndSListLinkEl = Styled(Link)`
    text-decoration: none;
    cursor: pointer;
    outline: none;
`
