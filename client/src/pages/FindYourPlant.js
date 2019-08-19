import React from 'react'
import Search from '../components/Search'
import PlantList from '../components/PlantList'

export default function FindYourPlant() {
  return (
    <div>
      <Search />
      <h2>List</h2>
      <PlantList/>
      
    </div>
  )
}
