import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
    //useEffect fetch to back end
    //set estate with recived data
    //pass data down as prop

  const [tracklist, setTrackList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect (()=>{
    fetch("http://localhost:8001/tracks")
    .then(r => r.json())
    .then(data => setTrackList(data))
  }, [])

  return (
    <div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <AddTrackForm tracklist={tracklist} setTrackList={setTrackList}/>
      <TracksList tracklist={tracklist} searchInput={searchInput}/>
    </div>
  )
}

export default TracksPage