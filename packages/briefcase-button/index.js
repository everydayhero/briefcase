import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { comp } from 'stranger'
import 'minimal.css'

/**
* A simple button
*/

const buttonStyle = (props, {
  color,
  rems,
  scale,
  radius
}) => ({
  backgroundColor: color.light,
  color: color.darkest,
  fontSize: props.size && scale(props.size),
  fontWeight: 800,
  padding: `${rems(3)} ${rems(4)}`,
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
