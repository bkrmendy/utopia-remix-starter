// import * as React from 'react'
import { Outlet } from '@remix-run/react'

const Card = () => {
  return <div></div>
}

export default function App() {
  return (
    <div
      className='my-class'
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout',
        transition: 'all 3s ease-out',
      }}
    >
      <Card />
      <Outlet style={{ transition: 'all 3s ease-out' }} />
    </div>
  )
}
