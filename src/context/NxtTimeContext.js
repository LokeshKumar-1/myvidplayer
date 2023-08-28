import React from 'react'

const NxtTimeContext = React.createContext({
  selectedTheme: 'LIGHT',
  toggleThemeBtn: () => {},
  showMenuForSmallDevice: false,
  toggleMenuForSmallDevices: () => {},
  selectedMenuItem: 'HOME',
  changeMenuToNew: () => {},
  savedVideoList: [],
  addVideoToSavedList: () => {},
})

export default NxtTimeContext
