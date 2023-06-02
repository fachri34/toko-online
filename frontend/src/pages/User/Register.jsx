import React, { useEffect } from 'react'
import Register from '../../components/Register/Register'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RegisterPage = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user)

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/")
    }
  }, [])
  return (
    <div>
      <Register />
    </div>
  )
}

export default RegisterPage