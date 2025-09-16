import React from "react"

type SwitchProps = {
  isActive: boolean,
  onToggle: () => void
}

const DumbSwitch = (props: SwitchProps) => {
  return (
    <div
      onClick={props.onToggle}
      className={props.isActive ? "toggleSwitch on" : "toggleSwitch"}>
      <div></div>
    </div>
  )
}

export default DumbSwitch
