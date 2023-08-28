import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import './App.css'
import HomeRoute from './components/HomeRoute'
import NxtTimeContext from './context/NxtTimeContext'
import TrendingRoute from './components/TrendingRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFound from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    selectedTheme: 'LIGHT',
    showMenuForSmallDevice: false,
    selectedMenuItem: 'HOME',
    savedVideoList: [],
  }

  toggleThemeBtn = () => {
    const {selectedTheme} = this.state

    if (selectedTheme === 'LIGHT') {
      this.setState({selectedTheme: 'DARK'})
    } else {
      this.setState({selectedTheme: 'LIGHT'})
    }
  }

  changeMenuToNew = menu => {
    console.log(menu)
    this.setState({selectedMenuItem: menu})
  }

  toggleMenuForSmallDevices = () => {
    this.setState(prevState => ({
      showMenuForSmallDevice: !prevState.showMenuForSmallDevice,
    }))
  }

  addVideoToSavedList = videoDetails => {
    const {savedVideoList} = this.state
    const decisionMaking = savedVideoList.some(item => {
      if (item.id === videoDetails.id) {
        return true
      }
      return null
    })

    if (decisionMaking === true) {
      const filteredData = savedVideoList.filter(
        item => item.id !== videoDetails.id,
      )

      this.setState({savedVideoList: filteredData})
    } else {
      this.setState(prevState => ({
        savedVideoList: [...prevState.savedVideoList, videoDetails],
      }))
    }
  }

  render() {
    const {
      selectedTheme,
      selectedMenuItem,
      showMenuForSmallDevice,
      savedVideoList,
    } = this.state

    return (
      <NxtTimeContext.Provider
        value={{
          selectedTheme,
          toggleThemeBtn: this.toggleThemeBtn,
          showMenuForSmallDevice,
          toggleMenuForSmallDevices: this.toggleMenuForSmallDevices,
          selectedMenuItem,
          changeMenuToNew: this.changeMenuToNew,
          savedVideoList,
          addVideoToSavedList: this.addVideoToSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtTimeContext.Provider>
    )
  }
}
export default App
