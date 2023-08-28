import Styled from 'styled-components'

export const HeaderNavEl = Styled.nav`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background-color: ${props => props.headingBgColor};
`

export const LogoImgEl = Styled.img`
    width: 150px;
    @media screen and (max-width: 767px) {
        width: 100px;
    }
`

export const NavContentContainer = Styled.div`
    height: 100%;
    width: 230px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 767px) {
        width: 120px;
    }
`
export const ThemeButtonEl = Styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 25px;
    color: ${props => props.themeIconButtonColor};
    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`
export const ProfileImageEl = Styled.img`
    width: 30px;
    margin: 0px;
    @media screen and (max-width: 767px) {
        width: 25px;
        display: none;
    }
`

export const SDMenuButton = Styled.button`
    border: none;
    background-color: transparent;
    color: ${props => props.themeIconButtonColor};
    font-size: 25px;
    font-weight: bold;
     @media screen and (min-width: 768px) {
        display: none;
    }
`

export const PopupBgContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const LogoutButton = Styled.button`
    height: 40px;
    width: 100px;
    background-color: transparent;
    border: 1px solid ${props => props.logoutBtnColor};
    color: ${props => props.logoutBtnColor};
    border-radius: 5px;
    cursor: pointer;
    outline: none;
     @media screen and (max-width: 767px) {
        display: none;
    }
`

export const SDLogoutButton = Styled.button`
    border: none;
    background-color: transparent;
    color: ${props => props.themeIconButtonColor};
    font-size: 25px;
    font-weight: bold;
     @media screen and (min-width: 768px) {
        display: none;
    }
`

export const PopupContentContainer = Styled.div`
    background-color: ${props => props.popupBgColor};
    height: 200px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
     box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.3);
      @media screen and (max-width: 767px) {
        width: 300px;
    }
`
export const PopupQuestion = Styled.p`
    font-family: "Roboto";
     color: ${props => props.popupColor};
`

export const PopupButtonsContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    margin-top: 30px;
`

export const PopupButtons = Styled.button`
    height: 40px;
    width: 100px;
    background-color: ${props =>
      props.containBorder ? 'transparent' : '#3b82f6'};
    border: ${props => (props.containBorder ? '1px solid #7e858e' : 'none')};
    color:  ${props => (props.containBorder ? '#7e858e' : '#ffffff')};;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
`
