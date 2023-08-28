import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import NxtTimeContext from '../../context/NxtTimeContext'
import Header from '../Header'
import ListItem from '../ListItem'
import './index.css'
import {
  HomeParentContainer,
  SideMenuForSmallDevice,
  SideMenuForLargeDevice,
  HomeContentContainer,
  PremiumBannerContainer,
  PremiumBannerHeading,
  HomeLogoEl,
  GetNowButton,
  HomeCrossBtnEl,
  HomeListAndSearchContainer,
  SearchContainer,
  SearchInputEl,
  SearchIconEl,
  UnOrderListContainer,
  EmptyListContainer,
  NoListImage,
  NoListTitle,
  NoListPara,
  RetryBtn,
} from './HomeStyledComponent'
import SideMenu from '../SideMenu'

const apiStatusCode = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeRoute extends Component {
  state = {
    videoList: [],
    apiStatus: apiStatusCode.initial,
    showBanner: true,
    searchValue: '',
  }

  componentDidMount() {
    this.getAllTypeOfVideos()
  }

  getAllTypeOfVideos = async () => {
    this.setState({apiStatus: apiStatusCode.inProgress})
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
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

  bannerCrossBtnTriggered = () => {
    this.setState({showBanner: false})
  }

  updateSearchInput = event => {
    this.setState({searchValue: event.target.value}, this.getAllTypeOfVideos)
  }

  searchBtnClicked = () => {
    this.getAllTypeOfVideos()
  }

  renderPremiumBanner = () => (
    <PremiumBannerContainer data-testid="banner">
      <HomeCrossBtnEl
        type="button"
        onClick={this.bannerCrossBtnTriggered}
        data-testid="close"
      >
        <AiOutlineClose />
      </HomeCrossBtnEl>
      <HomeLogoEl
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <PremiumBannerHeading as="p">
        Buy Nxt Watch Premium prepaid plans with UPI
      </PremiumBannerHeading>
      <GetNowButton>GET IT NOW</GetNowButton>
    </PremiumBannerContainer>
  )

  renderWatchListView = () => {
    const {videoList} = this.state
    return (
      <UnOrderListContainer data-testid="home">
        {videoList.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </UnOrderListContainer>
    )
  }

  renderEmptyListView = selectedTheme => (
    <EmptyListContainer>
      <NoListImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoListTitle selectedTheme={selectedTheme}>
        No Search results found
      </NoListTitle>
      <NoListPara selectedTheme={selectedTheme}>
        Try different key words or remove search filter
      </NoListPara>
      <RetryBtn type="button" onClick={this.searchBtnClicked}>
        Retry
      </RetryBtn>
    </EmptyListContainer>
  )

  renderFailureListView = selectedTheme => {
    const failImg =
      selectedTheme === 'LIGHT'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

    return (
      <EmptyListContainer>
        <NoListImage src={failImg} alt="failure view" />
        <NoListTitle selectedTheme={selectedTheme}>
          Oops! Something Went Wrong
        </NoListTitle>
        <NoListPara selectedTheme={selectedTheme}>
          We are having some trouble to complete your request <br />
          Please try again.
        </NoListPara>
        <RetryBtn type="button" onClick={this.searchBtnClicked}>
          Retry
        </RetryBtn>
      </EmptyListContainer>
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

  toggleViewBetweenSuccessList = selectedTheme => {
    const {videoList} = this.state
    if (videoList.length === 0) {
      return this.renderEmptyListView(selectedTheme)
    }
    return this.renderWatchListView(selectedTheme)
  }

  renderFinalResultView = selectedTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusCode.inProgress:
        return this.renderLoaderView(selectedTheme)
      case apiStatusCode.failure:
        return this.renderFailureListView(selectedTheme)
      case apiStatusCode.success:
        return this.toggleViewBetweenSuccessList(selectedTheme)
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchValue} = this.state

    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {selectedTheme, showMenuForSmallDevice} = value

          const homeBgColorForVideosContainer =
            selectedTheme === 'LIGHT' ? '#f9f9f9' : '#181818'
          return (
            <div data-testid="home">
              <Header />
              <HomeParentContainer
                data-testid="home"
                homeBgColorForVideosContainer={homeBgColorForVideosContainer}
              >
                {showMenuForSmallDevice && (
                  <SideMenuForSmallDevice>
                    <SideMenu />
                  </SideMenuForSmallDevice>
                )}
                <SideMenuForLargeDevice>
                  <SideMenu />
                </SideMenuForLargeDevice>
                <HomeContentContainer>
                  {showBanner && this.renderPremiumBanner()}
                  <HomeListAndSearchContainer>
                    <SearchContainer>
                      <SearchInputEl
                        type="search"
                        placeholder="Search"
                        value={searchValue}
                        onChange={this.updateSearchInput}
                        selectedTheme={selectedTheme}
                      />
                      <SearchIconEl
                        type="button"
                        selectedTheme={selectedTheme}
                        onClick={this.searchBtnClicked}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchIconEl>
                    </SearchContainer>
                    {this.renderFinalResultView(selectedTheme)}
                  </HomeListAndSearchContainer>
                </HomeContentContainer>
              </HomeParentContainer>
            </div>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}

export default HomeRoute
