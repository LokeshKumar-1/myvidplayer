import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import NxtTimeContext from '../../context/NxtTimeContext'
import Header from '../Header'
import SideMenu from '../SideMenu'
import TrendingAndSavedVideoItem from '../TrendingAndSavedVideoItem'
import {
  SVParentContainer,
  SVSideMenuForSmallDevice,
  SVSideMenuForLargeDevice,
  SVContentContainer,
  OtherBannerContainer,
  BannerLogoContainer,
  OtherBannerHeading,
  SVVideoList,
  SVEmptyContainer,
  SVEmptyImage,
  SVEmptyTitle,
  SVEmptyPara,
} from './savedVideosStyledComponents'

class SavedVideosRoute extends Component {
  renderSavedVideosSuccessView = selectedTheme => {
    const {savedVideoList} = this.context
    const bannerBgColor = selectedTheme === 'LIGHT' ? '#e2e8f0' : '#212121'
    return (
      <SVContentContainer>
        <OtherBannerContainer bannerBgColor={bannerBgColor}>
          <BannerLogoContainer selectedTheme={selectedTheme}>
            <HiFire />
          </BannerLogoContainer>
          <OtherBannerHeading selectedTheme={selectedTheme}>
            Saved Videos
          </OtherBannerHeading>
        </OtherBannerContainer>
        <SVVideoList>
          {savedVideoList.map(item => (
            <TrendingAndSavedVideoItem item={item} key={item.id} />
          ))}
        </SVVideoList>
      </SVContentContainer>
    )
  }

  renderEmptyListView = selectedTheme => (
    <SVEmptyContainer>
      <SVEmptyImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <SVEmptyTitle selectedTheme={selectedTheme}>
        No saved videos found
      </SVEmptyTitle>
      <SVEmptyPara selectedTheme={selectedTheme}>
        You can save your videos while watching them
      </SVEmptyPara>
    </SVEmptyContainer>
  )

  render() {
    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {selectedTheme, showMenuForSmallDevice, savedVideoList} = value

          const trendingBgColorForVideosContainer =
            selectedTheme === 'LIGHT' ? '#f9f9f9' : '#0f0f0f'

          return (
            <div data-testid="savedVideos">
              <Header />
              <SVParentContainer
                data-testid="savedVideos"
                homeBgColorForVideosContainer={
                  trendingBgColorForVideosContainer
                }
              >
                {showMenuForSmallDevice && (
                  <SVSideMenuForSmallDevice>
                    <SideMenu />
                  </SVSideMenuForSmallDevice>
                )}
                <SVSideMenuForLargeDevice>
                  <SideMenu />
                </SVSideMenuForLargeDevice>
                {savedVideoList.length !== 0
                  ? this.renderSavedVideosSuccessView(selectedTheme)
                  : this.renderEmptyListView(selectedTheme)}
              </SVParentContainer>
            </div>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}

SavedVideosRoute.contextType = NxtTimeContext

export default SavedVideosRoute
