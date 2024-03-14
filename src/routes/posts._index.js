import React from 'react'
import { Link } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'
import { Title } from '/src/title.js'
import { CategoryFilters } from '/src/category-filters.js'
import { activities as ac } from '/public/data.js'
import { Card } from '/src/card.js'

export function loader() {
  return json({
    activities: ac,
  })
}

export default function Posts() {
  const { activities } = useLoaderData()

  return (
    <div
      className='my-class'
      style={{
        backgroundColor: 'var(--off-white)',
        height: '100%',
        transition: 'all 0.5s ease-out',
      }}
    >
      <Title title={'BBeffore I Go'} />
      <CategoryFilters />
      {activities.map(
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
          >
            <Link to={`${id}`}>
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
                >
                  <div
                    style={{
                      fontFamily: 'primary-basic',
                      fontSize: '28px',
                      textAlign: 'left',
                      lineHeight: '1.2em',
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--secondary)',
                      fontSize: '12px',
                      textAlign: 'left',
                    }}
                  >
                    {description}
                    <br />
                    <br />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 5,
                      }}
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
