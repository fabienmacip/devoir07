import React, {useEffect, useState} from 'react';

export default function Photos() {
  
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    fetch('http://localhost:1337/api/photos/',
    {
      method: "GET",
      headers: {
        'Accept': 'Application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      setPhotos(response)
      setIsLoading(false)
      
    })
  }, []);

  
  //const mesPhotos = [{id:9,titre:"Premier titre de remplacement"},{id:10,titre:"2ème titre de remplacement"}]
  
  

  return (
    <div>
      <h2>
        Liste des photos
      </h2>
      <div>
    
      {isLoading ? 'Loading...' : photos.map((i) => <h4>{i.titre}</h4>)}
      

      </div>
    </div>
  )
}