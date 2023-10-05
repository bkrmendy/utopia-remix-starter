import React from 'react'
import { Link } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'
import { Title } from '/src/title.js'
import { CategoryFilters } from '/src/category-filters.js'
import { activities } from '/public/data.js'
import { Card } from '/src/card.js'

export function loader() {
  return fetch(
    'https://lingering-cloud-2308.fly.dev/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query:
          '{ hello { id, name, imageUrl, rating, date, description, categories } }',
      }),
    },
  )
    .then((r) => r.json())
    .then((data) => json({ hello: data }))
}

export default function Posts() {
  const { hello } = useLoaderData()

  console.log(hello.data.hello)

  return (
    <div
      className='my-class'
      style={{
        backgroundColor: 'var(--off-white)',
        height: '100%',
        transition: 'all 0.5s ease-out',
      }}
    >
      <Title />
      <CategoryFilters />
      {hello.data.hello.map((activity) => (
        <div
          style={{
            width: '100%',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            flexWrap: 'nowrap',
            padding: '0px 0px',
          }}
        >
          <Link to={`${activity.id}`}>
            <Card
              activity={activity}
              style={{
                width: 834,
                height: 267,
                display: 'flex',
                flexDirection: 'row',
                overflow: 'hidden',
                borderTop:
                  activity.id % 2
                    ? '3px solid var(--yellow)'
                    : '3px solid var(--orange)',
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
