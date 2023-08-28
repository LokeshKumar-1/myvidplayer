import Styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideComponentParentContainer = Styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.SideBgColorForListContainer};
    font-family: "Roboto";
    margin: 0px;
    padding-top: 15px;
    @media screen and (max-width: 767px) {
         display: flex;
        flex-direction: column;
        width: 100%;
        height: 70vh;
        justify-content: center;
        align-items: center;
    }
`
export const SideUnOrListContainer = Styled.ul`
    padding: 0px;
    width: 99%;
    height: 100%;
    list-style-type: none;
    @media screen and (max-width: 767px) {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const NavLinkEl = Styled(Link)`
    cursor: pointer;
    outline: none;
    text-decoration: none;
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
     color: ${props => props.color};
    margin: 5px;
    padding: 10px 10px 10px 25px;
    font-size: 20px;
    cursor: pointer;
    outline: none;
`

export const SideListItem = Styled.li`
    height: 50px;  
    width: 100%;
    background-color: ${props => props.isActive};
    display: flex;
    @media screen and (max-width: 767px) {
        justify-content: center;
    }
`
export const ListText = Styled.p`
    color: ${props => props.colorForText};
    margin-left: 30px;
    font-size: 18px;
`

export const ContactContainer = Styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px;
    color: ${props => props.color};
    @media screen and (max-width: 767px) {
        display: none;
    }
`
export const ContactTitle = Styled.p`
    font-size: 20px;
`
export const ContactIcons = Styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
`
export const ContactIconItem = Styled.img`
    width: 50px;
`

export const ContactPara = Styled.p`
    font-size: 15px;
    font-family: "Roboto";
`
export const CrossBtnEl = Styled.button`
    font-size: 25px;
    align-self: flex-end;
    border: none;
    background-color: transparent;
    color: ${props => props.colorForText};
    cursor: pointer;
    outline: none;
    margin-right: 15px;
    @media screen and (min-width: 768px) {
        display: none;
    }
`
