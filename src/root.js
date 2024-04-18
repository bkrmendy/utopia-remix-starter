import * as React from 'react'
import { Outlet } from '@remix-run/react'

// testing

export default function App() {
  return (
    <div
      style={{
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
        contain: 'layout',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '8px',
          fontWeight: 700,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        }}
      >
        Root.js
      </div>
      <Outlet />
    </div>
  )
}
