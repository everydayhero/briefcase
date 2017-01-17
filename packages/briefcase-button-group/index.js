import React from 'react'
import { TraitsProvider } from 'the-stranger'
import rug from 'the-rug'
import 'minimal.css'

const traits = {
  ...rug,
  color: {
    ...rug.color,
    light: 'red'
  }
}

/**
* A simple button
*/

const ButtonGroup = ({ children }) => {
  return (<TraitsProvider traits={traits}>
    {children}
  </TraitsProvider>)
}

export default ButtonGroup
