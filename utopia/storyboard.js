import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'

export var storyboard = (
  <Storyboard>
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 834,
        height: 1328,
        left: 8,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
    />
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 834,
        height: 1328,
        left: 916,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
    />
    <Scene
      style={{
        position: 'absolute',
        left: -2464,
        width: 2368,
        height: 1656,
        top: -24,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </Scene>
  </Storyboard>
)
