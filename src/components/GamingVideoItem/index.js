import NxtTimeContext from '../../context/NxtTimeContext'
import {
  GameLinkEl,
  GamingVideoListItemContainer,
  GamingListItemImageEl,
  GamingListItemTitle,
  GamingListItemViews,
} from './gamingVideoItemStyledComponents'

const GamingVideoItem = props => (
  <NxtTimeContext.Consumer>
    {value => {
      const {changeMenuToNew, selectedTheme} = value
      const {item} = props
      const {thumbnailUrl, title, id, viewCount} = item

      const textColor = selectedTheme === 'LIGHT' ? '#231f20' : '#ffffff'

      const removeMenu = () => {
        changeMenuToNew('')
      }

      return (
        <GameLinkEl to={`/videos/${id}`} onClick={removeMenu}>
          <GamingVideoListItemContainer>
            <GamingListItemImageEl src={thumbnailUrl} alt="video thumbnail" />
            <GamingListItemTitle color={textColor}>{title}</GamingListItemTitle>
            <GamingListItemViews>
              {viewCount} Watching Worldwide
            </GamingListItemViews>
          </GamingVideoListItemContainer>
        </GameLinkEl>
      )
    }}
  </NxtTimeContext.Consumer>
)

export default GamingVideoItem
