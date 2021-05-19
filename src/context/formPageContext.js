import React, { useState, createContext } from 'react'

// Create Context Object
export const FormPageContext = createContext([[], () => {}])

// Create a provider for components to consume and subscribe to changes
export const FormPageContextProvider = (props) => {
  const [formPage, setFormPage] = useState('manager')
  const [submitCase, setSubmitCase] = useState(false)

  return (
    <FormPageContext.Provider
      value={{
        formPageValue: [formPage, setFormPage],
        submitCaseValue: [submitCase, setSubmitCase],
      }}
    >
      {props.children}
    </FormPageContext.Provider>
  )
}
