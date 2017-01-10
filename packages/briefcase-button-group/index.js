import React from 'react'
import { TraitsProvider } from 'stranger'
import rug from 'rug'
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
