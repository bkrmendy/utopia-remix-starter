import React from 'react'
import { Title } from '/src/title.js'
import { CategoryItem } from '/src/category-item.js'

export function Details({
  name,
  imageUrl,
  rating,
  date,
  description,
  categories,
}) {
  const [done, setDone] = React.useState(false)

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
      <div style={{ width: '100%' }}>
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
    </div>
  )
}
