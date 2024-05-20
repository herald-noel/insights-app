import { useState } from 'react'
import { register } from '../../../services/auth/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openSignUp } from '../signUpFromDialogSlice'
import { openSignIn } from '../../SignIn/signInFormDialogSlice'
import { loginSuccess } from '../../../reducer/user/userSlice'

const useSignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [emailError, setEmailError] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')

  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError(true)
      setPasswordErrorMsg('Password does not match.')
      return true
    } else if (password.length < 6) {
      setPasswordError(true)
      setPasswordErrorMsg('Password must be atleast 6 characters.')
      return true
    }
    setPasswordError(false)
    return false
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validatePassword()) return
    const signUpData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    }
    try {
      const userData = await register(signUpData)
      setEmailError(false)
      setEmailErrorMsg('')

      dispatch(openSignUp())
      dispatch(loginSuccess(userData))

      navigate('/home')
    } catch (error) {
      setEmailError(true)
      setEmailErrorMsg('Email already exist.')
    }
  }

  const handleLinkSignIn = () => {
    dispatch(openSignIn())
    dispatch(openSignUp()) // Close the sign-up form
  }

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    emailError,
    emailErrorMsg,
    passwordError,
    passwordErrorMsg,
    handleLinkSignIn,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  }
}

export default useSignUp
