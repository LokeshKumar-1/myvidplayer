import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import NxtTimeContext from '../../context/NxtTimeContext'

import {
  ListItemParentContainer,
  ListItemImageEl,
  ListItemProfileContainer,
  ChannelLogoImage,
  ListItemContentContainer,
  ListItemTitleEl,
  ChannelName,
  AboutVideoContainer,
  ListLinkEl,
} from './ListItemStyledComponents'

const ListItem = props => {
  const {item} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    publishedAt,
    title,
    name,
    viewCount,
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
          <ListLinkEl to={`/videos/${id}`} onClick={removeMenu}>
            <ListItemParentContainer>
              <ListItemImageEl src={thumbnailUrl} alt="video thumbnail" />
              <ListItemProfileContainer>
                <ChannelLogoImage src={profileImageUrl} alt="channel logo" />
                <ListItemContentContainer>
                  <ListItemTitleEl selectedTheme={selectedTheme}>
                    {title}
                  </ListItemTitleEl>
                  <ChannelName>{name}</ChannelName>
                  <AboutVideoContainer>
                    <ChannelName>{`${viewCount} views`}</ChannelName>
                    <BsDot style={{fontSize: '30px'}} />
                    <ChannelName>{formattedData}</ChannelName>
                  </AboutVideoContainer>
                </ListItemContentContainer>
              </ListItemProfileContainer>
            </ListItemParentContainer>
          </ListLinkEl>
        )
      }}
    </NxtTimeContext.Consumer>
  )
}

export default ListItem
