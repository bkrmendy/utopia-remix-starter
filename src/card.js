import * as React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/react'
import '../public/globals.css'
import { useState, useCallback } from 'react'
import { CardComplete } from '/src/card-complete.js'
import { CardIncomplete } from '/src/card-incomplete.js'

export var Card = (props) => {
  const [completed, setCompleted] = useState(false)
  const toggleComplete = useCallback(
    () => setCompleted((completed) => !completed),
    [],
  )

  const color =
    props.activity.id % 2
      ? 'var(--yellow)'
      : 'var(--orange)'

  return (
    <div
      data-label='Activity Card'
      onClick={toggleComplete}
      style={{ overflow: 'hidden', ...props.style }}
      css={{ '&:hover': { cursor: 'pointer' } }}
    >
      {!completed ? (
        <CardComplete
          activity={props.activity}
          color={color}
        />
      ) : (
        <CardIncomplete
          activity={props.activity}
          color={color}
        />
      )}
    </div>
  )
}
