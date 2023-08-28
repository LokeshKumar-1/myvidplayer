import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import NxtTimeContext from '../../context/NxtTimeContext'

import {
  TAndSParentContainer,
  TAndSImageEl,
  TAndSProfileContainer,
  TAndSChannelLogoImage,
  TAndSContentContainer,
  TAndSTitleEl,
  TAndSChannelName,
  TAndSAboutVideoContainer,
  TAndSListLinkEl,
} from './TrendingAndSVStyledComponents'

const TrendingAndSavedVideoItem = props => {
  const {item} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    viewCount,
    publishedAt,
    id,
  } = item
  const dateInText = formatDistanceToNow(new Date(publishedAt))
  const splittedData = dateInText.split(' ')
  splittedData.shift()

  const finalData = splittedData.join(' ')

  const formattedData = `${finalData} ago`
  return (
    <NxtTimeContext.Consumer>
      {value => {
        const {selectedTheme, changeMenuToNew} = value

        const removeMenu = () => {
          changeMenuToNew('')
        }

        return (
          <TAndSListLinkEl to={`/videos/${id}`} onClick={removeMenu}>
            <TAndSParentContainer>
              <TAndSImageEl src={thumbnailUrl} alt="video thumbnail" />
              <TAndSProfileContainer>
                <TAndSChannelLogoImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TAndSContentContainer>
                  <TAndSTitleEl selectedTheme={selectedTheme}>
                    {title}
                  </TAndSTitleEl>
                  <TAndSChannelName>{name}</TAndSChannelName>
                  <TAndSAboutVideoContainer>
                    <TAndSChannelName>{`${viewCount} views`}</TAndSChannelName>
                    <BsDot style={{fontSize: '30px'}} />
                    <TAndSChannelName>{formattedData}</TAndSChannelName>
                  </TAndSAboutVideoContainer>
                </TAndSContentContainer>
              </TAndSProfileContainer>
            </TAndSParentContainer>
          </TAndSListLinkEl>
        )
      }}
    </NxtTimeContext.Consumer>
  )
}

export default TrendingAndSavedVideoItem
