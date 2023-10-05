import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'
import { Card } from '/src/card.js'
import { Details } from '/src/details.js'

export var storyboard = (
  <Storyboard>
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 816,
        height: 1296,
        left: 96,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='Remix App'
    />
    <RemixScene
      className='my-class'
      style={{
        position: 'absolute',
        width: 816,
        height: 1296,
        left: 968,
        top: -24,
        overflow: 'hidden',
      }}
      data-label='Remix App'
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
    {/* <Scene
      style={{
        position: 'absolute',
        left: 2002,
        top: -46,
        width: 924,
        height: 1370,
      }}
      data-label='Details Component'
    >
      <Details
        name='Attend The Floating Lantern Festival'
        imageUrl='./assets/lanterns.png'
        rating={3}
        date='06 05 2022'
        description='In the warmth of the moonlight, thousands of glowing lanterns drift gracefully into the sky, creating the magic and serenity of Thailands enchanting floating lantern festival.'
        categories={['aquatic', 'colorful']}
        style={{
          position: 'absolute',
          left: 44,
          top: 32,
          width: 488,
          height: 830,
        }}
      />
    </Scene> */}
  </Storyboard>
)
