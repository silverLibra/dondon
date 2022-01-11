import React from 'react'

const SVGArrowDown = React.memo(({ color = '#fff' }: { color?: string }) => {
  return (
    <svg viewBox="0 0 50 21" width="50" height="21" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fill={color} stroke="null"
              d="m26.28586,11.53046l23.3609,-9.88a2.36686,1 0 0 0 -3.33727,-1.41l-21.44375,9.06l-20.82836,-8.8a2.36686,1 0 0 0 -3.33727,0l0,0a2.36686,1 0 0 0 0,1.42l22.74552,9.61a2.01183,0.85 0 0 0 2.84023,0z"
              className="cls-1"/>
        <path fill={color} stroke="null"
              d="m26.28586,21.11046l23.3609,-9.88a2.36686,1 0 0 0 -3.33727,-1.41l-21.44375,9.06l-20.82836,-8.8a2.36686,1 0 0 0 -3.33727,0l0,0a2.36686,1 0 0 0 0,1.41l22.74552,9.62a2.01183,0.85 0 0 0 2.84023,0z"
              className="cls-1"/>
      </g>
    </svg>
  )
})

export default SVGArrowDown
