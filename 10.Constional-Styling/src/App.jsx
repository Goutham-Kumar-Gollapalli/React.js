import React from 'react'
import Conditional_statement from './component/Conditional_statement'
import Conditional_className from './component/Conditional_className'
import ActiveAndInactive_UI from './component/ActiveAndInactive_UI'
import ErrorAndSucces from './component/ErrorAndSucces'

function App() {
  return (
    <div>
      <Conditional_statement/>
      <Conditional_className/>
      <ActiveAndInactive_UI/>
      <ErrorAndSucces/>
    </div>
  )
}

export default App