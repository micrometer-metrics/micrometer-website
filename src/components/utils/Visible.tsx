import * as React from "react"
import { ReactNode } from "react"
import ReactVisibilitySensor from "react-visibility-sensor"

interface Props {
  children: ReactNode
  className?: string
  once?: boolean
}

export const Visible = ({ children, className, once }: Props) => {
  const [visible, setVisible] = React.useState(false)
  const onChange = (isVisible: boolean) => {
    if ((once && !visible) || !once) {
      setVisible(isVisible)
    }
  }
  return (
    <ReactVisibilitySensor partialVisibility={true} onChange={onChange}>
      <div
        className={`${className ? className : ""} ${visible ? "visible" : ""}`}
      >
        {children}
      </div>
    </ReactVisibilitySensor>
  )
}

export default Visible
