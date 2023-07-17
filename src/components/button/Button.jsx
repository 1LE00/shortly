import './button.css';
import { forwardRef } from "react"

const Button = forwardRef(({ name, click, copy, className }, ref) => {
  return (
    <button className={`btn ${className ? className : ''}`} onClick={click || copy} ref={ref}>{name}</button>
  )
});

export default Button