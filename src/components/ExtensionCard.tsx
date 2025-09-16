import React from "react"
import DumbSwitch from './ToggleSwitch'

type ExtCardProps = {
  id: number,
  name: string,
  description: string,
  logo: string,
  isActive: boolean,
  removeFunc: (id: number) => void,
  toggleFunc: (id: number) => void
}

const ExtCardLol = (p: ExtCardProps) => {
  return (
    <div className='extensionCard'>
      <div className='cardHeader'>
        <img src={p.logo} />
        <div>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => p.removeFunc(p.id)}>Remove</button>
        <DumbSwitch isActive={p.isActive} onToggle={() => p.toggleFunc(p.id)} />
      </div>
    </div>
  )
}

export default ExtCardLol
