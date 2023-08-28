import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameLinkEl = Styled(Link)`
    text-decoration: none;
    cursor: pointer;
    outline: none;
    margin: 20px;
`

export const GamingVideoListItemContainer = Styled.li`
    height: fit-content;
    width: 250px;
    font-family: "Roboto";
    @media screen and (max-width: 767px) {
        height: 300px;
        width: 150px;
    }
`
export const GamingListItemImageEl = Styled.img`
    height: 300px;
    width: 100%;
    @media screen and (max-width: 767px) {
        height: 180px;
    }
`
export const GamingListItemTitle = Styled.p`
    color: ${props => props.color};
     @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`
export const GamingListItemViews = Styled.p`
    color: #616e7c;
    @media screen and (max-width: 767px) {
        font-size: 12px;
    }
`
