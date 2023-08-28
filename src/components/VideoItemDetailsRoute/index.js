import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike} from 'react-icons/bi'
import Cookies from 'js-cookie'
import NxtTimeContext from '../../context/NxtTimeContext'
import Header from '../Header'
import SideMenu from '../SideMenu'
import './index.css'
import {
  VideoDetailsParentContainer,
  VideoDetailsSideMenuForSmallDevice,
  VideoDetailsSideMenuForLargeDevice,
  VideoDetailsFailureContainer,
  VideoDetailsFailureImage,
  VideoDetailsFailureTitle,
  VideoDetailsFailurePara,
  VideoDetailsFailureRetryBtn,
  VideoDetailsContentContainer,
  VideoDetailsVideoContainer,
  VideoDetailsTitleEl,
  VideoDetailsAboutVideoContainer,
  ViewsAndDateContainer,
  VideoDetailsViews,
  LikeDislikeSaveContainer,
  LikeDislikeSaveItem,
  LikeDislikeSaveItemWord,
  HorizontalLine,
  ChannelContainer,
  VideoDetailsChannelLogoImage,
  VideoDetailsChannelNameAndSub,
} from './videoItemDetailsStyledComponents'

const apiStatusCode = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusCode.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusCode.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    if (response.ok) {
      const formattedData = {
        name: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscribeCount: fetchedData.video_details.channel.subscriber_count,

        description: fetchedData.video_details.description,
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        videoDetails: formattedData,
        apiStatus: apiStatusCode.success,
      })
    } else {
      this.setState({apiStatus: apiStatusCode.failure})
    }
  }

  retryBtnTriggered = () => {
    this.getVideoDetails()
  }

  likeBtnTriggered = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  disLikeBtnTriggered = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  saveBtnTriggered = () => {
    const {addVideoToSavedList} = this.context
    const {videoDetails} = this.state
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
    addVideoToSavedList(videoDetails)
  }

  renderSuccessView = selectedTheme => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      profileImageUrl,
      name,
      subscribeCount,
      description,
      publishedAt,
    } = videoDetails

    console.log(profileImageUrl)
    const dateInText = formatDistanceToNow(new Date(publishedAt))

    const splittedData = dateInText.split(' ')
    splittedData.shift()

    const finalData = splittedData.join(' ')

    const formattedData = `${finalData} ago`

    const colorForLiked = isLiked ? '#2563eb' : '#64748b'
    const colorForDisliked = isDisliked ? '#2563eb' : '#64748b'
    const colorForSaved = isSaved ? '#2563eb' : '#64748b'
    return (
      <VideoDetailsContentContainer>
        <VideoDetailsVideoContainer>
          <ReactPlayer controls url={videoUrl} width="100%" height="100%" />
        </VideoDetailsVideoContainer>
        <VideoDetailsTitleEl selectedTheme={selectedTheme}>
          {title}
        </VideoDetailsTitleEl>
        <VideoDetailsAboutVideoContainer>
          <ViewsAndDateContainer>
            <VideoDetailsViews>{viewCount} views</VideoDetailsViews>
            <BsDot style={{fontSize: '30px'}} />
            <VideoDetailsViews>{formattedData}</VideoDetailsViews>
          </ViewsAndDateContainer>
          <LikeDislikeSaveContainer>
            <LikeDislikeSaveItem type="button" onClick={this.likeBtnTriggered}>
              <AiOutlineLike style={{fontSize: '23px', color: colorForLiked}} />
              <LikeDislikeSaveItemWord color={colorForLiked}>
                Like
              </LikeDislikeSaveItemWord>
            </LikeDislikeSaveItem>
            <LikeDislikeSaveItem
              type="button"
              color={isDisliked ? '#2563eb' : '#64748b'}
              onClick={this.disLikeBtnTriggered}
            >
              <BiDislike style={{fontSize: '23px', color: colorForDisliked}} />
              <LikeDislikeSaveItemWord color={colorForDisliked}>
                Dislike
              </LikeDislikeSaveItemWord>
            </LikeDislikeSaveItem>
            <LikeDislikeSaveItem type="button" onClick={this.saveBtnTriggered}>
              <MdPlaylistAdd style={{fontSize: '23px', color: colorForSaved}} />
              <LikeDislikeSaveItemWord color={colorForSaved}>
                {isSaved ? 'Saved' : 'Save'}
              </LikeDislikeSaveItemWord>
            </LikeDislikeSaveItem>
          </LikeDislikeSaveContainer>
        </VideoDetailsAboutVideoContainer>
        <HorizontalLine />
        <ChannelContainer>
          <VideoDetailsChannelLogoImage
            src={profileImageUrl}
            alt="channel logo"
          />
          <VideoDetailsChannelNameAndSub>
            <VideoDetailsTitleEl
              selectedTheme={selectedTheme}
              style={{margin: '0px'}}
            >
              {name}
            </VideoDetailsTitleEl>
            <VideoDetailsViews selectedTheme={selectedTheme}>
              {subscribeCount} subscribers
            </VideoDetailsViews>
          </VideoDetailsChannelNameAndSub>
        </ChannelContainer>
        <VideoDetailsTitleEl
          as="p"
          selectedTheme={selectedTheme}
          style={{fontFamily: 'Roboto', fontSize: '17px'}}
        >
          {description}
        </VideoDetailsTitleEl>
      </VideoDetailsContentContainer>
    )
  }

  renderFailureListView = selectedTheme => {
    const failImg =
      selectedTheme === 'LIGHT'
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

    return (
      <VideoDetailsFailureContainer>
        <VideoDetailsFailureImage src={failImg} alt="failure view" />
        <VideoDetailsFailureTitle selectedTheme={selectedTheme}>
          Oops! Something Went Wrong
        </VideoDetailsFailureTitle>
        <VideoDetailsFailurePara selectedTheme={selectedTheme}>
          WWe are having some trouble to complete your request. Please try
          again.
        </VideoDetailsFailurePara>
        <VideoDetailsFailureRetryBtn
          type="button"
          onClick={this.retryBtnTriggered}
        >
          Retry
        </VideoDetailsFailureRetryBtn>
      </VideoDetailsFailureContainer>
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
        return this.renderSuccessView(selectedTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {selectedTheme, showMenuForSmallDevice} = value

          const homeBgColorForVideosContainer =
            selectedTheme === 'LIGHT' ? '#f9f9f9' : '#0f0f0f'

          return (
            <div data-testid="videoItemDetails">
              <Header />
              <VideoDetailsParentContainer
                data-testid="videoItemDetails"
                homeBgColorForVideosContainer={homeBgColorForVideosContainer}
              >
                {showMenuForSmallDevice && (
                  <VideoDetailsSideMenuForSmallDevice>
                    <SideMenu />
                  </VideoDetailsSideMenuForSmallDevice>
                )}
                <VideoDetailsSideMenuForLargeDevice>
                  <SideMenu />
                </VideoDetailsSideMenuForLargeDevice>
                {this.renderFinalResultView(selectedTheme)}
              </VideoDetailsParentContainer>
            </div>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}

VideoItemDetailsRoute.contextType = NxtTimeContext

export default VideoItemDetailsRoute
