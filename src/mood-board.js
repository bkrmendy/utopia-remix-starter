import * as React from 'react'
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
import { CategoryFilters } from '/src/category-filters.js'
import { Card } from '/src/card.js'

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
          left: 376,
          top: 81,
          width: 956,
          height: 180,
          zIndex: 100,
        }}
        title={<h1>BBeffore I Go</h1>}
      />
      <Card
        activity={activities[2]}
        style={{
          position: 'absolute',
          top: 1268,
          left: 961,
        }}
      />
      <Checkerboard
        style={{
          position: 'absolute',
          height: 479,
          width: 404,
          left: 203,
          top: 260,
        }}
        color1='var(--purple)'
        color2='var(--orange)'
      />
      <Tropicologist
        style={{
          position: 'absolute',
          left: 325,
          top: 741,
          width: 100,
          height: 100,
          zIndex: 100,
        }}
      />
      <AquaMan
        style={{
          position: 'absolute',
          left: 152,
          top: 522,
          width: 100,
          height: 100,
          zIndex: 100,
        }}
      />
      <ImageContainer
        imageUrl={activities[2].imageUrl}
        style={{
          position: 'absolute',
          left: 647,
          top: 521.5,
        }}
      />
      <DecorativeLines
        style={{
          width: 1022,
          zIndex: 100,
          contain: 'layout',
          height: 64,
          left: 1439,
          top: 940,
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
          width: 786,
          height: 482,
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
          top: 169,
          left: 1705,
        }}
      />
      <Mixologist
        style={{
          position: 'absolute',
          left: 1654,
          top: 1101,
          width: 100,
          height: 100,
        }}
      />
      <Cryophile
        style={{
          position: 'absolute',
          left: 1574,
          top: 972,
          width: 100,
          height: 100,
        }}
      />
      <Wonderer
        style={{
          position: 'absolute',
          left: 1704,
          top: 872,
          width: 100,
          height: 100,
        }}
      />
      <span
        style={{
          position: 'absolute',
          wordBreak: 'break-word',
          fontSize: '44px',
          height: 42,
          color: 'var(--yellow)',
          left: 753,
          top: 285,
          width: 872,
        }}
      >
        {activities[2].name}
      </span>
      <CategoryFilters
        style={{
          position: 'absolute',
          top: 330,
          left: 84,
          width: 1540,
          height: 172,
        }}
      />
    </div>
  )
}
