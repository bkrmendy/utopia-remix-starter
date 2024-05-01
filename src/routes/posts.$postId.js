import React from 'react'
import { Link } from '@remix-run/react'
import { useParams } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'
import { Title } from '/src/title.js'
import { activities } from '/public/data.js'
import { CategoryItem } from '/src/category-item.js'

async function wait(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

export async function loader({ params }) {
  // await wait(1000)
  if (params.postId === '0') {
    return json(activities[0])
  }
  if (params.postId === '1') {
    return json(activities[1])
  }
  if (params.postId === '2') {
    return json(activities[2])
  }
  if (params.postId === '3') {
    return json(activities[3])
  }
  return json({ error: 'not found' })
}

export default function PostForId() {
  const {
    name,
    imageUrl,
    rating,
    date,
    description,
    categories,
  } = useLoaderData()

  return (
    <div
      className='my-class'
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--off-white)',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflowY: 'scroll',
      }}
    >
      <Title />
      <span
        style={{
          width: '100%',
          fontSize: '26px',
          padding: 30,
          fontFamily: 'primary-basic',
          fontSize: '32px',
          textAlign: 'left',
          lineHeight: '1.2em',
          color: 'var(--purple)',
          backgroundColor: 'var(--yellow)',
        }}
      >
        {name}
      </span>

      <div
        style={{
          height: 600,
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
      <div
        style={{
          width: '100%',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--secondary)',
            fontSize: '18px',
            textAlign: 'left',
            color: 'var(--orange)',
            padding: 30,
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
                  backgroundColor: 'var(--purple)',
                  color: 'var(--orange)',
                  padding: '4px 10px',
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
          position: 'absolute',
          left: 30,
          bottom: 30,
        }}
      >
        <Link to='/posts'>
          <CategoryItem name='Back' />
        </Link>
      </div>
    </div>
  )
}
