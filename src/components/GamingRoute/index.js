import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import NxtTimeContext from '../../context/NxtTimeContext'
import Header from '../Header'
import SideMenu from '../SideMenu'
import './index.css'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingParentContainer,
  GamingSideMenuForSmallDevice,
  GamingSideMenuForLargeDevice,
  GamingContentContainer,
  OtherBannerContainer,
  BannerLogoContainer,
  OtherBannerHeading,
  GamingFailureContainer,
  GamingFailureImage,
  GamingFailureTitle,
  GamingFailurePara,
  GamingFailureRetryBtn,
  GamingVideoList,
} from './gamingStyledComponent'

const apiStatusCode = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {
    gamingVideoList: [],
    apiStatus: apiStatusCode.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusCode.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const formattedData = fetchedData.videos.map(item => ({
        id: item.id,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))
      this.setState({
        gamingVideoList: formattedData,
        apiStatus: apiStatusCode.success,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  renderGamingSuccessView = selectedTheme => {
    const {gamingVideoList} = this.state
    const bannerBgColor = selectedTheme === 'LIGHT' ? '#e2e8f0' : '#212121'
    return (
      <GamingContentContainer>
        <OtherBannerContainer bannerBgColor={bannerBgColor}>
          <BannerLogoContainer selectedTheme={selectedTheme}>
            <SiYoutubegaming />
          </BannerLogoContainer>
          <OtherBannerHeading selectedTheme={selectedTheme}>
            Gaming
          </OtherBannerHeading>
        </OtherBannerContainer>
        <GamingVideoList>
          {gamingVideoList.map(item => (
            <GamingVideoItem
              item={item}
              selectedTheme={selectedTheme}
              key={item.id}
            />
          ))}
        </GamingVideoList>
      </GamingContentContainer>
    )
  }

  retryBtnTriggered = () => {
    this.getGamingList()
  }

  renderFailureListView = selectedTheme => {
    const failImg =
      selectedTheme === 'LIGHT'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    console.log('Failure:', selectedTheme)
    return (
      <GamingFailureContainer>
        <GamingFailureImage src={failImg} alt="failure view" />
        <GamingFailureTitle selectedTheme={selectedTheme}>
          Oops! Something Went Wrong
        </GamingFailureTitle>
        <GamingFailurePara selectedTheme={selectedTheme}>
          We are having some trouble to complete your request <br />
          Please try again.
        </GamingFailurePara>
        <GamingFailureRetryBtn type="button" onClick={this.retryBtnTriggered}>
          Retry
        </GamingFailureRetryBtn>
      </GamingFailureContainer>
    )
  }

  renderLoaderView = selectedTheme => {
    const loaderColor = selectedTheme === 'LIGHT' ? '#4f46e5' : '#ffffff'
    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color={loaderColor} height="50" width="50" />
      </div>
    )
  }

  renderFinalResultView = selectedTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.inProgress:
        return this.renderLoaderView(selectedTheme)
      case apiStatusCode.failure:
        return this.renderFailureListView(selectedTheme)
      case apiStatusCode.success:
        return this.renderGamingSuccessView(selectedTheme)
      default:
        return null
    }
  }

  render() {
    const {gamingVideoList} = this.state
    console.log(gamingVideoList)
    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {selectedTheme, showMenuForSmallDevice} = value

          return (
            <div data-testid="gaming">
              <Header />
              <GamingParentContainer
                selectedTheme={selectedTheme}
                data-testid="gaming"
              >
                {showMenuForSmallDevice && (
                  <GamingSideMenuForSmallDevice>
                    <SideMenu />
                  </GamingSideMenuForSmallDevice>
                )}
                <GamingSideMenuForLargeDevice>
                  <SideMenu />
                </GamingSideMenuForLargeDevice>
                {this.renderFinalResultView(selectedTheme)}
              </GamingParentContainer>
            </div>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}

export default GamingRoute
