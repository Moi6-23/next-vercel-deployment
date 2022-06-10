import React, { FC } from 'react'

type ComponenteProps = {
  children: React.ReactNode
}

const DarkLayout: FC <ComponenteProps>= ({children}) => {
  return (
    <div style={
        {
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '40px',
            borderRadius: '5px'
        }
    }>
        <h3>Dark Layout</h3>
        <div>
         {children}
        </div>
    </div>
  )
}

export default DarkLayout