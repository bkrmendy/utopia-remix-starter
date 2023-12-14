import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'

const StoryboardComponent = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#48F9FF',
        contain: 'layout',
      }}
    >
      <StoryboardCard
        style={{
          backgroundColor: '#aaaaaa33',
          position: 'absolute',
          left: 21,
          top: 19,
          width: 159,
          height: 97,
        }}
      />
    </div>
  )
}

const StoryboardCard = (props) => {
  return (
    <div style={props.style}>
      <span>I'm a StoryboardCard</span>
    </div>
  )
}

export var storyboard = (
  <Storyboard>
    <div
      style={{
        backgroundColor: '#aaaaaa33',
        width: 200,
        height: 200,
        contain: 'layout',
        position: 'absolute',
        left: 400,
        top: 0,
      }}
    >
      <div style={{ backgroundColor: '#FF0000' }}>
        Trying to resize me breaks the navigator for remix
        scenes
      </div>
    </div>
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 800,
        height: 400,
        left: 400,
        top: 250,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
    />
    <Scene
      style={{
        position: 'absolute',
        left: 682,
        top: 0,
        width: 200,
        height: 200,
      }}
    >
      <StoryboardComponent />
    </Scene>
  </Storyboard>
)
