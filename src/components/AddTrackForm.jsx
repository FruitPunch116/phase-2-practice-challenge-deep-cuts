import React, { useState } from 'react'

function AddTrackForm(tracklist, setTrackList) {
  
  const [newTrack,setNewtrack] = useState({
    title: "",
    artist: "",
    BPM: 0,
    image: ""
  })

  function updateNewTrack (e) {
    setNewtrack({
     ...newTrack,
     [e.target.name]: e.target.value
    })
    
  }
  //submitNewTrack() and POST

  function submitNewTrack (e) {
    e.preventDefault()

    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrack)
    })

    setTrackList(tracklist => [...tracklist, newTrack])
    e.target.reset()
  }

  return (
      <form onSubmit={ e => submitNewTrack(e)}>
        <div>
          <input value={newTrack.image} type="text" name="image" placeholder="Image URL" onChange={ e=> updateNewTrack(e)}/>
          <input value={newTrack.title} type="text" name="title" placeholder="title" onChange={ e=> updateNewTrack(e)}/>
          <input value={newTrack.artist} type="text" name="artist" placeholder="Artist" onChange={ e=> updateNewTrack(e)}/>
          <input value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={ e=> updateNewTrack(e)}/>
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm