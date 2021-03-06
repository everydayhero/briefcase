import React from 'react'
import { comp } from 'the-stranger'
import 'minimal.css'
import Button from '../briefcase-button'

/**
* A Primary Button
*/

const ButtonPrimaryStyled = comp(({
  traits: {
    color
  }
}) => ({
  backgroundColor: color.primary,
  color: color.lightest
}))(Button)

const ButtonPrimary = (props) => (
  <ButtonPrimaryStyled {...props} />
)

export default ButtonPrimary
