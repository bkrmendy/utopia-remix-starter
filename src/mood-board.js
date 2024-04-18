// import * as React from 'react'
import {
  DecorativeLines,
  Checkerboard,
} from '/src/cardcomponents/decorations.js'
import { ImageContainer } from '/src/cardcomponents/imagecontainer.js'
import { Wonderer, Cryophile } from '/src/stickers.js'
import { Mixologist } from '/src/stickers.js'
import { Tropicologist } from '/src/stickers.js'
import { AquaMan } from '/src/stickers.js'
import { activities } from '/public/data.js'
import { Title } from '/src/title.js'

export var MoodBoard = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--off-white)',
        color: 'var(--purple)',
        fontFamily: 'primary-basic',
        position: 'relative',
      }}
    >
      <Title
        style={{
          position: 'absolute',
          left: 294,
          top: 98,
          width: 956,
          height: 180,
          zIndex: 100,
        }}
      />

      <span
        style={{
          position: 'absolute',
          wordBreak: 'break-word',
          fontSize: '44px',
          height: 42,
          color: 'var(--yellow)',
          left: 643,
          top: 311,
          width: 872,
        }}
      >
        {activities[2].name}
      </span>

      <Checkerboard
        style={{
          position: 'absolute',
          height: 335,
          width: 532,
          left: 203,
          top: 404,
        }}
        color1='var(--purple)'
        color2='var(--orange)'
      />
      <Tropicologist
        style={{
          position: 'absolute',
          left: 333,
          top: 739,
          width: 100,
          height: 100,
          zIndex: 100,
        }}
      />
      <AquaMan
        style={{
          position: 'absolute',
          left: 150,
          top: 740,
          width: 100,
          height: 100,
          zIndex: 100,
        }}
      />
      <ImageContainer
        imageUrl={activities[2].imageUrl}
        style={{
          position: 'absolute',
          left: 469,
          top: 467,
        }}
      />
      <DecorativeLines
        style={{
          width: 1022,
          zIndex: 100,
          contain: 'layout',
          height: 64,
          left: 972,
          top: 894,
          position: 'absolute',
          transform: 'rotate(90deg)',
        }}
        color='var(--orange)'
      />
      <div
        style={{
          backgroundColor: 'lch(57 100 16)',
          display: 'flex',
          flexDirection: 'row',
          gap: 50,
          padding: 59,
          contain: 'layout',
          zIndex: 100,
          top: 920,
          left: 98,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: 'max-content',
          height: 'max-content',
          border: '0px solid #DD4A76FF',
        }}
      >
        <span
          style={{
            wordBreak: 'break-word',
            fontSize: '24px',
            fontFamily: 'var(--secondary)',
            lineHeight: '140%',
            contain: 'layout',
            width: 298,
            display: 'block',
            color: 'var(--purple)',
            zIndex: 100,
            height: 'max-content',
          }}
        >
          {activities[3].description}
        </span>
        <img
          data-aspect-ratio-locked
          src={activities[3].imageUrl}
          style={{
            width: 240,
            height: 180,
            contain: 'layout',
          }}
          alt='cool activity'
        />
        <Wonderer
          style={{
            width: 122,
            height: 122,
            transform: 'rotate(-14deg)',
            zIndex: 100,
            contain: 'layout',
          }}
        />
      </div>
      <img
        data-aspect-ratio-locked
        src='./assets/lanterns.png'
        alt='cool activity'
        style={{
          position: 'absolute',
          width: 540,
          height: 540,
          top: 986,
          left: 775,
        }}
      />
      <Mixologist
        style={{
          position: 'absolute',
          left: 1150,
          top: 1121,
          width: 100,
          height: 100,
        }}
      />
      <Cryophile
        style={{
          position: 'absolute',
          left: 1266,
          top: 1206,
          width: 100,
          height: 100,
        }}
      />
      <Wonderer
        style={{
          position: 'absolute',
          left: 1150,
          top: 1326,
          width: 100,
          height: 100,
        }}
      />
    </div>
  )
}
