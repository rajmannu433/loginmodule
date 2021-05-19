import React, { useState, createContext } from 'react'

// Create Context Object
export const RoleContext = createContext([[], () => {}])

// Create a provider for components to consume and subscribe to changes
export const RoleContextProvider = (props) => {
  const [role, setRole] = useState('Medical')
  const [testVar, setTestVar] = useState('This should work')

  return (
    <RoleContext.Provider value={[role, setRole]}>
      {props.children}
    </RoleContext.Provider>
  )
}
