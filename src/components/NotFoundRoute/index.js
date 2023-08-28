import Header from '../Header'
import SideMenu from '../SideMenu'
import NxtTimeContext from '../../context/NxtTimeContext'
import {
  NotFoundParentContainer,
  NotFoundMenuForSmallDevice,
  NotFoundMenuForLargeDevice,
  NotFoundContentContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundPara,
} from './notFoundStyledComponents'

const NotFound = () => (
  <NxtTimeContext.Consumer>
    {value => {
      const {selectedTheme, showMenuForSmallDevice} = value

      const trendingBgColorForVideosContainer =
        selectedTheme === 'LIGHT' ? '#f9f9f9' : '#0f0f0f'
      const notFoundImage =
        selectedTheme === 'LIGHT'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <NotFoundParentContainer
            homeBgColorForVideosContainer={trendingBgColorForVideosContainer}
          >
            {showMenuForSmallDevice && (
              <NotFoundMenuForSmallDevice>
                <SideMenu />
              </NotFoundMenuForSmallDevice>
            )}
            <NotFoundMenuForLargeDevice>
              <SideMenu />
            </NotFoundMenuForLargeDevice>
            <NotFoundContentContainer>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundTitle selectedTheme={selectedTheme}>
                Page Not Found
              </NotFoundTitle>
              <NotFoundPara selectedTheme={selectedTheme}>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContentContainer>
          </NotFoundParentContainer>
        </>
      )
    }}
  </NxtTimeContext.Consumer>
)

export default NotFound
