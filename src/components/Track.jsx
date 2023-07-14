import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({title, artist, image, BPM}) {
  return (
    <tr className="table-row">
        <td className="row-image">
            {image ? <img src={image} alt="title" /> : <img src={defaultVinyl} alt="title" />}
        </td>
        <td className="row-title">{title}  </td>
        <td>{artist}</td>
        <td>{BPM}</td>
    </tr>
  )
}

export default Track