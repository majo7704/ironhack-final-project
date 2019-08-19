import PlantList from '../components/PlantList'
import MainLayout from '../components/layouts/MainLayout'
import '../css/Navbar.css'

import React from 'react'

export default function myJungle() {
  return (
    <div>
      <>
        <MainLayout />
        <div>
          {/* <ul>
            {this.props.plantList.map((plant) => {
              return <PlantList plantList={plant} key={plant.id}/>
            })
            }
         </ul> */}
          

        </div>
      </>
    </div>
  )
}


