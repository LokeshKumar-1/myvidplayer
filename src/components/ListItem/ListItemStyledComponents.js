import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItemParentContainer = Styled.li`
    height: 400px;
    width: 350px;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    margin: 20px 15px 20px 0px;
    @media screen and (max-width: 767px) {
        width: 100%;
        margin: 10px 0px 10px 0px;
    }
`

export const ListItemImageEl = Styled.img`
    width: 100%;
`
export const ListItemProfileContainer = Styled.div`
    width: 100%;
    display: flex;
    margin: 10px;
`

export const ChannelLogoImage = Styled.img`
    width: 40px;
    height: 50px;
`

export const ListItemContentContainer = Styled.div`
    width: 80%;
    margin-left: 10px;
`

export const ListItemTitleEl = Styled.p`
    color: ${props =>
      props.selectedTheme === 'LIGHT' ? '#1e293b' : '#f1f5f9'};
    font-size: 15px;
    margin: 0px;
`

export const ChannelName = Styled.p`
    color: #616e7c;
    margin-top: 10px;
`
export const AboutVideoContainer = Styled.div`
    display: flex;
    align-items: center;
    color: #616e7c;
    margin-top: 0px;
`

export const ListLinkEl = Styled(Link)`
    text-decoration: none;
    cursor: pointer;
    outline: none;
`
