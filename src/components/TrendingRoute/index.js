import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import NxtTimeContext from '../../context/NxtTimeContext'
import Header from '../Header'
import SideMenu from '../SideMenu'
import TrendingAndSavedVideoItem from '../TrendingAndSavedVideoItem'
import './index.css'
import {
  TrendingParentContainer,
  TrendingSideMenuForSmallDevice,
  TrendingSideMenuForLargeDevice,
  TrendingContentContainer,
  OtherBannerContainer,
  BannerLogoContainer,
  OtherBannerHeading,
  TrendingFailureContainer,
  TrendingFailureImage,
  TrendingFailureTitle,
  TrendingFailurePara,
  TrendingFailureRetryBtn,
  TrendingVideoList,
} from './trendingStyledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusCode.initial,
  }

  componentDidMount() {
    this.getAllTrendingVideos()
  }

  getAllTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusCode.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const formattedData = fetchedData.videos.map(item => ({
        name: item.channel.name,
        profileImageUrl: item.channel.profile_image_url,
        id: item.id,
        publishedAt: item.published_at,
        thumbnailUrl: item.thumbnail_url,
        title: item.title,
        viewCount: item.view_count,
      }))

      this.setState({
        videoList: formattedData,
        apiStatus: apiStatusCode.success,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  retryBtnTriggered = () => {
    this.getAllTrendingVideos()
  }

  renderTrendingSuccessView = selectedTheme => {
    const {videoList} = this.state
    const bannerBgColor = selectedTheme === 'LIGHT' ? '#e2e8f0' : '#212121'
    return (
      <TrendingContentContainer>
        <OtherBannerContainer bannerBgColor={bannerBgColor}>
          <BannerLogoContainer selectedTheme={selectedTheme}>
            <HiFire />
          </BannerLogoContainer>
          <OtherBannerHeading selectedTheme={selectedTheme}>
            Trending
          </OtherBannerHeading>
        </OtherBannerContainer>
        <TrendingVideoList>
          {videoList.map(item => (
            <TrendingAndSavedVideoItem item={item} key={item.id} />
          ))}
        </TrendingVideoList>
      </TrendingContentContainer>
    )
  }

  renderFailureListView = selectedTheme => {
    const failImg =
      selectedTheme === 'LIGHT'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

    return (
      <TrendingFailureContainer>
        <TrendingFailureImage src={failImg} alt="failure view" />
        <TrendingFailureTitle selectedTheme={selectedTheme}>
          Oops! Something Went Wrong
        </TrendingFailureTitle>
        <TrendingFailurePara selectedTheme={selectedTheme}>
          We are having some trouble to complete your request <br />
          Please try again.
        </TrendingFailurePara>
        <TrendingFailureRetryBtn type="button" onClick={this.retryBtnTriggered}>
          Retry
        </TrendingFailureRetryBtn>
      </TrendingFailureContainer>
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
        return this.renderTrendingSuccessView(selectedTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {selectedTheme, showMenuForSmallDevice} = value

          const trendingBgColorForVideosContainer =
            selectedTheme === 'LIGHT' ? '#f9f9f9' : '#0f0f0f'

          return (
            <div data-testid="trending">
              <Header />
              <TrendingParentContainer
                homeBgColorForVideosContainer={
                  trendingBgColorForVideosContainer
                }
                data-testid="trending"
              >
                {showMenuForSmallDevice && (
                  <TrendingSideMenuForSmallDevice>
                    <SideMenu />
                  </TrendingSideMenuForSmallDevice>
                )}
                <TrendingSideMenuForLargeDevice>
                  <SideMenu />
                </TrendingSideMenuForLargeDevice>
                {this.renderFinalResultView(selectedTheme)}
              </TrendingParentContainer>
            </div>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}
export default TrendingRoute
