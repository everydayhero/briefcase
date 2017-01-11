import React, { PropTypes } from 'react'
import Textarea from 'react-textarea-autosize'
import { comp } from 'stranger'
import 'minimal.css'

/**
* A simple button
*/

const createInput = comp(({
  size,
  type
}, {
  color,
  ems,
  font,
  leading,
  radius,
  rems,
  scale
}) => ({
  backgroundColor: color.lighter,
  borderColor: color.dark,
  borderRadius: radius(3),
  borderStyle: 'solid',
  borderWidth: rems(1),
  fontFamily: font.family.ui,
  fontSize: size && scale(size),
  fontWeight: font.weight.normal,
  lineHeight: type === 'textarea' ? leading.prose : leading.ui,
  padding: `${ems(3)} ${ems(3)}`,
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
