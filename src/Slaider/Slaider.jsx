import React, { useEffect } from 'react'

import "./Slaider.css";

function Slaider () {

  const [index, setIndex] = React.useState(0)

  const useEffectFunc = () => document.documentElement.style.setProperty("--index", index)

  useEffect(useEffectFunc, [index])

  return (
    <>
      <div className="slaider-wrapper">
        <ul className="slaider-list">
          <li className="slaider-item">One</li>
          <li className="slaider-item">Two</li>
          <li className="slaider-item">Three</li>
          <li className="slaider-item">Four</li>
          <li className="slaider-item">Five</li>
          <li className="slaider-item">Six</li>
          <li className="slaider-item">Seven</li>
        </ul>
      </div>

      <button className="slaider-button" onClick={() => setIndex(index + 1)}>Prev</button>
      <button className="slaider-button" onClick={() => setIndex(index - 1)}>Next</button>
    </>
  )
}

export default Slaider