import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiMenu, FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import NxtTimeContext from '../../context/NxtTimeContext'
import {
  HeaderNavEl,
  LogoImgEl,
  NavContentContainer,
  ThemeButtonEl,
  ProfileImageEl,
  PopupBgContainer,
  LogoutButton,
  PopupQuestion,
  PopupContentContainer,
  PopupButtonsContainer,
  PopupButtons,
  SDMenuButton,
  SDLogoutButton,
} from './indexStyledComponents'
import './index.css'

class Header extends Component {
  logoutBtnTriggered = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {
            selectedTheme,
            toggleThemeBtn,
            toggleMenuForSmallDevices,
            changeMenuToNew,
          } = value

          const themeChanged = () => {
            toggleThemeBtn()
          }

          const menuBtnTriggered = () => {
            toggleMenuForSmallDevices()
          }

          const homeLogoTriggered = () => {
            changeMenuToNew('HOME')
          }

          const headingBgColor =
            selectedTheme === 'LIGHT' ? '#f9f9f9' : '#181818'
          const themeIconButtonColor =
            selectedTheme === 'LIGHT' ? '#000000' : '#f8fafc'
          const logoutBtnColor =
            selectedTheme === 'LIGHT' ? '#4f46e5' : '#f8fafc'
          const logoImageUrl =
            selectedTheme === 'LIGHT'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const popupBgColor = selectedTheme === 'LIGHT' ? '#ffffff' : '#000000'
          const popupColor = selectedTheme === 'LIGHT' ? '#00306e' : '#f8fafc'
          return (
            <HeaderNavEl headingBgColor={headingBgColor}>
              <Link to="/" style={{textDecoration: 'none'}}>
                <LogoImgEl
                  src={logoImageUrl}
                  alt="website logo"
                  onClick={homeLogoTriggered}
                />
              </Link>
              <NavContentContainer>
                <ThemeButtonEl
                  type="button"
                  themeIconButtonColor={themeIconButtonColor}
                  data-testid="theme"
                  onClick={themeChanged}
                >
                  {selectedTheme === 'LIGHT' ? <FaMoon /> : <FiSun />}
                </ThemeButtonEl>
                <ProfileImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <SDMenuButton
                  themeIconButtonColor={themeIconButtonColor}
                  onClick={menuBtnTriggered}
                >
                  <FiMenu />
                </SDMenuButton>
                <PopupBgContainer>
                  <Popup
                    modal
                    trigger={
                      <div>
                        <LogoutButton
                          style={{
                            backgroundColor: headingBgColor,
                            color: logoutBtnColor,
                          }}
                        >
                          Logout
                        </LogoutButton>
                        <SDLogoutButton
                          themeIconButtonColor={themeIconButtonColor}
                        >
                          <FiLogOut />
                        </SDLogoutButton>
                      </div>
                    }
                    className="popup-content"
                  >
                    {close => (
                      <PopupContentContainer popupBgColor={popupBgColor}>
                        <PopupQuestion popupColor={popupColor}>
                          Are you sure, you want to logout?
                        </PopupQuestion>
                        <PopupButtonsContainer>
                          <PopupButtons
                            containBorder
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </PopupButtons>
                          <PopupButtons
                            type="button"
                            onClick={this.logoutBtnTriggered}
                          >
                            Confirm
                          </PopupButtons>
                        </PopupButtonsContainer>
                      </PopupContentContainer>
                    )}
                  </Popup>
                </PopupBgContainer>
              </NavContentContainer>
            </HeaderNavEl>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}

export default withRouter(Header)
