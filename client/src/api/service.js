import axios from 'axios'
import React from 'react'

const service = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api`,
  withCredentials: true
})

const errorHandler = err => {
  console.log(err);
  throw err;
}

export default {
  
  service,

  handleUpload(image_url, err) {
    console.log('file in service: ', image_url)
    return service.post('/upload', image_url)
      .then(res => res.data)
      .catch(err)
  },
  saveNewThing(newThing, err) {
    console.log('new thing is: ', newThing)
    return service.post('/myPlant', newThing)
      .then(res => res.data)
    .catch(err)
  }
}