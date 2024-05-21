import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../../../services/auth/auth'
import { openSignIn } from '../signInFormDialogSlice'
import { loginSuccess } from '../../../reducer/user/userSlice'

const useSignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')

  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const credentials = {
      email: email,
      password: password,
    }

    try {
      const userData = await login(credentials)
      setEmailError(false)
      setEmailErrorMsg('')
      dispatch(openSignIn())
      dispatch(loginSuccess(userData))

      navigate('/home')
    } catch (error) {
      setEmailError(true)
      setEmailErrorMsg('Error logging in. Please try again.')
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    emailErrorMsg,
    passwordError,
    passwordErrorMsg,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  }
}

export default useSignIn
