import React from 'react'
import { Link } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'
import { Title } from '/src/title.js'
import { CategoryFilters } from '/src/category-filters.js'
import { activities } from '/public/data.js'
import { Card } from '/src/card.js'

const wait = (ms) => new Promise((r) => setTimeout(r, ms))

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
    .then((data) =>
      wait(1000).then(() => json({ hello: data })),
    )
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
      data-uid='183'
    >
      <Title data-uid='9ab' />
      <CategoryFilters data-uid='2a5' />
      {hello.data.hello.map(
        ({
          id,
          name,
          imageUrl,
          rating,
          date,
          description,
          categories,
        }) => (
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
            data-uid='838'
          >
            <Link to={`${id}`} data-uid='5bb'>
              <div
                style={{
                  width: 834,
                  height: 267,
                  display: 'flex',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  borderTop:
                    id % 2
                      ? '3px solid var(--yellow)'
                      : '3px solid var(--orange)',
                }}
                data-uid='11b'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 20,
                    color: 'var(--purple)',
                    backgroundColor:
                      id % 2
                        ? 'var(--yellow)'
                        : 'var(--orange)',
                    gap: 20,
                    width: 679,
                    height: '100%',
                  }}
                  data-uid='246'
                >
                  <div
                    style={{
                      fontFamily: 'primary-basic',
                      fontSize: '28px',
                      textAlign: 'left',
                      lineHeight: '1.2em',
                    }}
                    data-uid='a66'
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--secondary)',
                      fontSize: '12px',
                      textAlign: 'left',
                    }}
                    data-uid='8c5'
                  >
                    {description}
                    <br data-uid='736' />
                    <br data-uid='335' />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                      }}
                      data-uid='17e'
                    >
                      {categories.map((category) => (
                        <div
                          style={{
                            backgroundColor:
                              'var(--purple)',
                            color:
                              id % 2
                                ? 'var(--yellow)'
                                : 'var(--orange)',
                            padding: '2px 6px',
                            borderRadius: 3,
                          }}
                          data-uid='be8'
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: '100%',
                    backgroundPosition: '50%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                  }}
                  data-uid='3fe'
                >
                  <div
                    style={{
                      height: 'min-content',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 20,
                      fontFamily: 'var(--secondary)',
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'var(--purple)',
                      zIndex: 100,
                      mixBlendMode: 'screen',
                    }}
                    data-uid='539'
                  >
                    {date}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ),
      )}
    </div>
  )
}
