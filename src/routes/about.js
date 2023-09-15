import * as React from 'react'
import { Title } from '/src/title.js'
import '/public/globals.css'

export default function About() {
  return (
    <div
      className='my-class'
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--off-white)',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px 0px 25px',
        gap: 5,
        boxShadow: '0px 2px 33px var(--yellow)',
        transition: 'all 3s ease-out',
      }}
    >
      <h1>About</h1>
    </div>
  )
}
