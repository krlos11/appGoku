import React from 'react'

export const PageCardItem = ( dataCharacter ) => {
  return (
    <div className="pagecard-content">
          <div className="pagecard-content-img">
            <img src={dataCharacter.image} alt={dataCharacter.name} width="180px"/>
          </div>
          <div className="pagecard-descriptions">
            <h2>{dataCharacter.name}</h2>
            
            <div className="descriptions-titles">
              <div className="descriptions-power">
                <p> <span>Name:</span> {dataCharacter.name}</p>
                <p> <span>Race:</span> {dataCharacter.race}</p>
              </div>
              <div className="descriptions-power">
                <p> <span>Ki:</span> {dataCharacter.ki}</p>
                <p> <span>MaxKi:</span> {dataCharacter.maxKi}</p>
              </div>
              <div className="descriptions-power">
                <p> <span>Planet:</span> {dataCharacter.originPlanet?.isDestroyed ? "Destruido.":"No Destruido."}</p>
                <p> <span>Genre:</span> {dataCharacter.gender}</p>
              </div>
            </div>

            <div className="descriptions-body">
              <div className="descriptions-body-origin">
                <p> <span>Origen:</span> {dataCharacter.originPlanet?.description}</p>
                <img src={dataCharacter.originPlanet?.image} alt={dataCharacter.name} height="100px"/>
              </div>
              <p> <span>Description:</span> {dataCharacter.description}</p>
            </div>

            <div>
            </div>
          </div>
      </div>
  )
}
