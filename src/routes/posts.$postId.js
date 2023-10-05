import React from 'react'
import { Link } from '@remix-run/react'
import { useParams } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'
import { Title } from '/src/title.js'
import { activities } from '/public/data.js'
import { CategoryItem } from '/src/category-item.js'
import { Details } from '/src/details'

export async function loader({ params }) {
  if (params.postId === '0') {
    return json(activities[0])
  }
  if (params.postId === '1') {
    return json(activities[1])
  }
  if (params.postId === '2') {
    return json(activities[2])
  }
  if (params.postId === '3') {
    return json(activities[3])
  }
  return json({ error: 'not found' })
}

export default function PostForId() {
  const {
    name,
    imageUrl,
    rating,
    date,
    description,
    categories,
  } = useLoaderData()

  return (
    <Details
      name={name}
      imageUrl={imageUrl}
      rating={rating}
      date={date}
      description={description}
      categories={categories}
      style={{
        position: 'absolute',
        left: 44,
        top: 32,
        width: 488,
        height: 830,
      }}
    />
  )
}
