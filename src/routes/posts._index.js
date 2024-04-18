import React from 'react'
import { Link } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'

export function loader() {
  return json({
    beaches: [
      {
        id: 1,
        name: 'La Digue',
        src:
          'https://source.unsplash.com/jPmurJKSL_0/600x800',
      },
      {
        id: 2,
        name: 'McWay Falls',
        src:
          'https://source.unsplash.com/07mSKrzKiRw/600x800',
      },
    ],
  })
}

export default function Posts() {
  const { beaches } = useLoaderData()
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: 'white',
        height: '100%',
      }}
    >
      <span
        style={{
          fontSize: '30px',
          fontWeight: 700,
          fontStyle: 'normal',
          marginBottom: 20,
          display: 'inline-block',
        }}
      >
        Beaches near you
      </span>
      {beaches.map(({ id, name, src }) => (
        <div
          style={{
            width: '100%',
            height: 'max-content',
            display: 'flex',
            flexDirection: 'row',
            gap: 26,
            padding: '15px',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            border: '1px solid black',
            marginBottom: '10px',
          }}
        >
          <img
            style={{
              backgroundColor: '#aaaaaa33',
              width: 77,
              height: 75,
              contain: 'layout',
              borderRadius: 20,
            }}
            src={src}
          />
          <span
            style={{
              wordBreak: 'break-word',
              width: 110,
              height: 33,
              contain: 'layout',
            }}
          >
            <Link to={`${id}`}>{name}</Link>
          </span>
        </div>
      ))}
    </div>
  )
}
