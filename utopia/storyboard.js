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
      style={{
        position: 'absolute',
        width: 1600,
        height: 1656,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </RemixScene>
    <Scene
      style={{
        position: 'absolute',
        left: -1700,
        width: 1600,
        height: 1656,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </Scene>
  </Storyboard>
)
