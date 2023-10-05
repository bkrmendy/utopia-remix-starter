import * as React from 'react'
import '../public/globals.css'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'

export var CategoryFilters = (props) => {
  return (
    <div
      className='category-container'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        height: 75,
        overflowX: 'scroll',
        justifyContent: 'center',
        ...props.style,
      }}
    >
      <CategoryItem
        selected={false}
        name='rare'
        style={{ width: 107, height: 45 }}
      />
      <CategoryItem
        selected={false}
        name='colorful'
        style={{ width: 152, height: 45 }}
      />
      <CategoryItem
        selected={false}
        name='odd'
        style={{ width: 97, height: 45 }}
      />
      <CategoryItem
        selected={false}
        name='trending'
        style={{ width: 147.5, height: 45 }}
      />
      <CategoryItem
        selected={false}
        name='risky'
        style={{ width: 112, height: 45 }}
      />
    </div>
  )
}
