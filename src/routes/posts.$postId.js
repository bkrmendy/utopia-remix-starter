import React from 'react'
import { useParams } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'

async function wait(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

export async function loader({ params }) {
  // await wait(1000)
  if (params.postId === '1') {
    return json({
      name: 'La Digue',
      src:
        'https://source.unsplash.com/jPmurJKSL_0/600x800',
      description:
        'Seychelles generally has warm temperatures throughout the year. They get frequent and sometimes heavy rainfall. On La Digue, rainfall can be very heavy, but it usually lasts for one hour or less. Daytime temperatures on La Digue normally range from 24 °C (75 °F) to 32 °C (90 °F); nighttime temperatures are slightly colder. The months with the heaviest rainfall are October to March, with monthly precipitation of 402.6 mm (15.85 in) in January. ',
    })
  }
  if (params.postId === '2') {
    return json({
      name: 'McWay Falls',
      src:
        'https://source.unsplash.com/07mSKrzKiRw/600x800',
      description:
        'In 1983, Big Sur experienced one of the wettest years on record with 88.85 inches (2,257 mm) of rain. Up to this time, McWay Falls fell directly into the ocean. The huge rainfall resulted in several landslides and mudflows,[9] including an extremely large mudslide immediately north of Julia Pfeiffer Burns State Park on March 1. The mudflow entered the ocean immediately to the north of the falls, and Highway 1 was closed for a year while the road was repaired.',
    })
  }
  return json({ error: 'not found' })
}

export default function PostForId() {
  const { name, src, description } = useLoaderData()

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 21,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        overflowY: 'scroll',
      }}
    >
      <img
        style={{
          backgroundColor: '#aaaaaa33',
          width: '100%',
          height: 246.5,
          objectFit: 'cover',
          contain: 'layout',
          borderRadius: 20,
        }}
        src={src}
      />
      <div
        style={{
          contain: 'layout',
          width: '100%',
          height: 'max-content',
        }}
      >
        <span
          style={{
            wordBreak: 'break-word',
            width: 99,
            contain: 'layout',
            fontSize: '26px',
            height: 30.5,
          }}
        >
          {name}
        </span>
      </div>
      <div
        style={{
          width: '100%',
          height: 19,
          contain: 'layout',
        }}
      >
        <span
          style={{
            wordBreak: 'break-word',
            width: '100%',
            height: 'max-content',
            contain: 'layout',
          }}
        >
          {description}
        </span>
      </div>
    </div>
  )
}
