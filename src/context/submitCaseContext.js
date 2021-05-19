import React, { useState, createContext } from 'react'

// Create Context Object
export const SubmitCaseContext = createContext([[], () => {}])

// Create a provider for components to consume and subscribe to changes
export const SubmitCaseContextProvider = (props) => {
  const [submitCase, setSubmitCase] = useState('manager')

  return (
    <SubmitCaseContext.Provider value={[submitCase, setSubmitCase]}>
      {props.children}
    </SubmitCaseContext.Provider>
  )
}
