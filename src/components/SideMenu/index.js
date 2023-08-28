import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtTimeContext from '../../context/NxtTimeContext'
import {
  SideComponentParentContainer,
  SideUnOrListContainer,
  NavLinkEl,
  ListText,
  SideListItem,
  ContactContainer,
  ContactTitle,
  ContactIcons,
  ContactIconItem,
  ContactPara,
  CrossBtnEl,
} from './sideMenuStyledComponent'

const SideMenu = () => (
  <NxtTimeContext.Consumer>
    {value => {
      const {
        selectedTheme,
        selectedMenuItem,
        changeMenuToNew,
        toggleMenuForSmallDevices,
      } = value

      const closeBtnForSmallDevice = () => {
        toggleMenuForSmallDevices()
      }

      const SideBgColorForListContainer =
        selectedTheme === 'LIGHT' ? '#f9f9f9' : '#181818'

      const colorForText = selectedTheme === 'LIGHT' ? ' #181818' : '#f1f5f9'

      const iconColors = selectedTheme === 'LIGHT' ? '#231f20' : '#909090'

      const changeMenuToHome = () => {
        changeMenuToNew('HOME')
      }

      const changeMenuToTrending = () => {
        changeMenuToNew('TRENDING')
      }

      const changeMenuToGaming = () => {
        changeMenuToNew('GAMING')
      }

      const changeMenuToSavedVideo = () => {
        changeMenuToNew('SAVED VIDEOS')
      }

      const itemBgColor = selectedTheme === 'LIGHT' ? '#d7dfe9' : '#383838'

      return (
        <SideComponentParentContainer
          SideBgColorForListContainer={SideBgColorForListContainer}
        >
          <CrossBtnEl
            type="button"
            colorForText={colorForText}
            onClick={closeBtnForSmallDevice}
          >
            <AiOutlineClose />
          </CrossBtnEl>
          <SideUnOrListContainer>
            <SideListItem
              isActive={
                selectedMenuItem === 'HOME' ? itemBgColor : 'transparent'
              }
              onClick={changeMenuToHome}
            >
              <NavLinkEl
                to="/"
                color={selectedMenuItem === 'HOME' ? '#ff0000' : iconColors}
              >
                <AiFillHome style={{margin: '0px', fontSize: '25px'}} />
                <ListText colorForText={colorForText}>Home</ListText>
              </NavLinkEl>
            </SideListItem>
            <SideListItem
              isActive={
                selectedMenuItem === 'TRENDING' ? itemBgColor : 'transparent'
              }
              onClick={changeMenuToTrending}
            >
              <NavLinkEl
                to="/trending"
                color={selectedMenuItem === 'TRENDING' ? '#ff0000' : iconColors}
              >
                <HiFire style={{margin: '0px', fontSize: '25px'}} />
                <ListText colorForText={colorForText}>Trending</ListText>
              </NavLinkEl>
            </SideListItem>
            <SideListItem
              isActive={
                selectedMenuItem === 'GAMING' ? itemBgColor : 'transparent'
              }
              onClick={changeMenuToGaming}
            >
              <NavLinkEl
                to="/gaming"
                color={selectedMenuItem === 'GAMING' ? '#ff0000' : iconColors}
              >
                <SiYoutubegaming style={{margin: '0px', fontSize: '25px'}} />
                <ListText colorForText={colorForText}>Gaming</ListText>
              </NavLinkEl>
            </SideListItem>
            <SideListItem
              isActive={
                selectedMenuItem === 'SAVED VIDEOS'
                  ? itemBgColor
                  : 'transparent'
              }
            >
              <NavLinkEl
                to="/saved-videos"
                color={
                  selectedMenuItem === 'SAVED VIDEOS' ? '#ff0000' : iconColors
                }
                onClick={changeMenuToSavedVideo}
              >
                <MdPlaylistAdd style={{margin: '0px', fontSize: '25px'}} />
                <ListText colorForText={colorForText}>Saved videos</ListText>
              </NavLinkEl>
            </SideListItem>
          </SideUnOrListContainer>
          <ContactContainer color={colorForText}>
            <ContactTitle>CONTACT US</ContactTitle>
            <ContactIcons>
              <ContactIconItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactIconItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactIconItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactIcons>
            <ContactPara>
              Enjoy! Now to see your <br />
              channels and <br /> recommendations!
            </ContactPara>
          </ContactContainer>
        </SideComponentParentContainer>
      )
    }}
  </NxtTimeContext.Consumer>
)
export default SideMenu
