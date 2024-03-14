import * as React from 'react'
import {
  Scene,
  Storyboard,
  RemixScene,
  registerInternalComponent,
} from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'
import { Title } from '/src/title'

registerInternalComponent(Title, {
  properties: {
    title: {
      control: 'jsx',
      preferredChildComponents: [
        {
          name: 'h1',
          variants: [{ code: '<h1>BBeffore I Go</h1>' }],
        },
      ],
    },
  },
  supportsChildren: true,
  variants: [],
})

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
      commentId='1bd'
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
      commentId='5b7'
    />
  </Storyboard>
)
