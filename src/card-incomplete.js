import * as React from 'react'
import '../public/globals.css'

export var CardIncomplete = (props) => {
  return (
    <div
      style={{
        width: 834,
        height: 267,
        overflow: 'hidden',
        backgroundImage: `url(${props.activity.imageUrl})`,
        backgroundSize: '100%',
        backgroundPosition: '50%',
        borderTop: `3px solid ${props.color}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 40px 20px 20px',
          backgroundColor: props.color,
          gap: 10,
          position: 'absolute',
          borderBottomRightRadius: 20,
          zIndex: 100,
        }}
      >
        <div
          style={{
            color: 'var(--purple)',
            fontFamily: 'primary-basic',
            fontSize: '28px',
            textAlign: 'left',
            lineHeight: '1.2em',
          }}
        >
          {props.activity.name}
        </div>
      </div>
      <div
        style={{
          width: '120%',
          marginLeft: '-10%',
          height: '160%',
          marginTop: '-10%',
          backgroundImage: `url(${props.activity.imageUrl})`,
          backgroundSize: '100%',
          backgroundPosition: '50%',
          filter: 'blur(1rem)',
        }}
      />
    </div>
  )
}
