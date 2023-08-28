import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtTimeContext from '../../context/NxtTimeContext'
import {
  LoginParentContainer,
  LoginFormContainer,
  LoginImageEl,
  InputItemContainer,
  InputLabelEl,
  InputInputEl,
  CheckboxInputEl,
  ShowPassItem,
  ShowPassContainer,
  LoginButton,
  ErrorMsgEl,
} from './LoginStyledComponent'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    isCheckBoxSelected: false,
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  checkboxTriggered = () => {
    this.setState(prevState => ({
      isCheckBoxSelected: !prevState.isCheckBoxSelected,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = message => {
    this.setState({showErrorMsg: true, errorMsg: message})
  }

  submitFormTriggered = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }

    const response = await fetch(apiUrl, options)
    const receivedData = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(receivedData.jwt_token)
    } else {
      this.onSubmitFailure(receivedData.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      isCheckBoxSelected,
    } = this.state

    const passType = isCheckBoxSelected ? 'text' : 'password'

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtTimeContext.Consumer>
        {value => {
          const {selectedTheme} = value
          const bgColor = selectedTheme === 'LIGHT' ? '#f9f9f9' : '#0f0f0f'
          const logoImageUrl =
            selectedTheme === 'LIGHT'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const cardBgColor = selectedTheme === 'LIGHT' ? '#f9f9f9' : '#0f0f0f'
          const colorForLabelEl =
            selectedTheme === 'LIGHT' ? '#212121' : '#f8fafc'
          const colorForInputEl =
            selectedTheme === 'LIGHT' ? '#181818' : '#ebebeb'
          return (
            <LoginParentContainer bgColor={bgColor}>
              <LoginFormContainer
                cardBgColor={cardBgColor}
                onSubmit={this.submitFormTriggered}
              >
                <LoginImageEl src={logoImageUrl} alt="website logo" />
                <InputItemContainer>
                  <InputLabelEl
                    colorForLabelEl={colorForLabelEl}
                    htmlFor="UsernameEl"
                  >
                    USERNAME
                  </InputLabelEl>
                  <InputInputEl
                    type="text"
                    id="UsernameEl"
                    value={username}
                    colorForInputEl={colorForInputEl}
                    placeholder="Username"
                    onChange={this.updateUsername}
                  />
                </InputItemContainer>
                <InputItemContainer>
                  <InputLabelEl
                    colorForLabelEl={colorForLabelEl}
                    htmlFor="PasswordEl"
                  >
                    PASSWORD
                  </InputLabelEl>
                  <InputInputEl
                    type={passType}
                    id="PasswordEl"
                    value={password}
                    colorForInputEl={colorForInputEl}
                    placeholder="Password"
                    onChange={this.updatePassword}
                  />
                </InputItemContainer>
                <ShowPassContainer>
                  <CheckboxInputEl
                    type="checkbox"
                    id="CheckBoxEl"
                    onChange={this.checkboxTriggered}
                    checked={isCheckBoxSelected}
                  />
                  <ShowPassItem
                    selectedTheme={selectedTheme}
                    htmlFor="CheckBoxEl"
                  >
                    Show Password
                  </ShowPassItem>
                </ShowPassContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMsg && <ErrorMsgEl>*{errorMsg}</ErrorMsgEl>}
              </LoginFormContainer>
            </LoginParentContainer>
          )
        }}
      </NxtTimeContext.Consumer>
    )
  }
}

export default LoginRoute
