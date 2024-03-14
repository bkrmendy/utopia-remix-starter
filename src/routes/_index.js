import * as React from 'react'
import { Link } from '@remix-run/react'
import { Title } from '/src/title.js'
import { Card } from '/src/card.js'
import { activities } from '/public/data.js'
import { CategoryFilters } from '/src/category-filters.js'
import '/public/globals.css'

export default function Index() {
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
      <Title title={'BBeffore I Go'} />
      <div
        style={{
          background: '#dd4a76',
          width: '80%',
          height: 80,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}
      >
        <Link
          style={{
            wordBreak: 'break-word',
            color: 'var(--off-white)',
            contain: 'layout',
            width: 'max-content',
            height: 'max-content',
            fontWeight: 700,
            fontFamily: 'var(--secondary)',
            fontSize: '28px',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          to='/posts'
        >
          Things I want to do
        </Link>
      </div>
    </div>
  )
}
