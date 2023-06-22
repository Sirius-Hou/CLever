import React from 'react'
import './clever.css'
import { Feature } from '../../components'

const Clever = () => {
  return (
    <div className="clever_wclever section_margin" id="wclever">
      <div className="clever__wclever-heading">
        <Feature />
      </div>
      <div className="clever_wclever-header">
        <h1 className="gradient_text">Clever helps you to get the job!</h1>
        <p>Explore our Examples</p>
      </div>
      <div className="clever__wclever-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default Clever