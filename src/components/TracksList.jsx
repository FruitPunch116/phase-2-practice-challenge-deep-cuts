import React from 'react'
import Track from './Track'

function TracksList({tracklist, searchInput}) {
  // console.log(tracklist)
  const filteredTrackList = tracklist.filter(track => {
    return track.title.toLowerCase().includes(searchInput.toLowerCase()) || track.artist.toLowerCase().includes(searchInput.toLowerCase())
  })

  const renderTracks = filteredTrackList.map(track => {
    return <Track title={track.title} artist={track.artist} image={track.image} BPM={track.BPM} key={track.id} />
  })


  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {renderTracks}
      </tbody>
    </table>
  )
}

export default TracksList