import React, { PropTypes } from 'react'
import Textarea from 'react-textarea-autosize'
import { comp } from 'the-stranger'
import 'minimal.css'

/**
* A simple button
*/

const createInput = comp(({
  props,
  traits: {
    color,
    font,
    leading,
    radius,
    size
  }
}) => ({
  backgroundColor: color.lighter,
  borderColor: color.dark,
  borderRadius: radius(3),
  borderStyle: 'solid',
  borderWidth: size(1),
  fontFamily: font.family.ui,
  fontSize: props.size && font.scale(props.size),
  fontWeight: font.weight.normal,
  lineHeight: props.type === 'textarea' ? leading.prose : leading.ui,
  padding: `${size(3, 'em')} ${size(3, 'em')}`,
  width: '100%',
  ':focus': {
    backgroundColor: color.lightest,
    borderColor: color.darkest
  }
}))

const InputStyled = createInput('input')
const TextareaStyled = createInput(Textarea, true)

const Input = (props) => {
  if (props.type === 'textarea') {
    return <TextareaStyled {...props} minRows={2.5} />
  }
  return <InputStyled {...props} />
}

Input.propTypes = {
  onChange: PropTypes.func
}

export default Input
