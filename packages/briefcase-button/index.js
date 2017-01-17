import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { comp } from 'the-stranger'
import 'minimal.css'

/**
* A simple button
*/

const buttonStyle = ({
  props,
  traits: {
    color,
    scale,
    size,
    radius
  }
}) => ({
  backgroundColor: color.light,
  color: color.darkest,
  fontSize: props.size && scale(props.size),
  fontWeight: 800,
  padding: `${size(3)} ${size(4)}`,
  borderRadius: radius(5)
})

const createButton = comp(buttonStyle)

const Button = (props) => {
  const Button = props.href
    ? createButton('a')
    : props.to
      ? createButton(Link, true)
      : createButton('button')

  return <Button {...props} />
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button
