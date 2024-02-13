import React from 'react'
import { Link } from 'react-router-dom'
import { primaryButton } from '../styles/bookcard'

const PrimaryButton = (props) => {
  return (
    <Link to={props.location} className={primaryButton}>{props.text}</Link>
  )
}

export default PrimaryButton