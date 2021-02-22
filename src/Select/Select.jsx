import { useState, useEffect, useRef } from "react"

import "./Select.css"

function Select () {

  const stacks = ["NodeJS", "React", "HTML", "CSS"]

  const [open, setOpen] = useState(false)

	const selectWrapperRef = useRef()

  const selectByDefaultOption = useRef()

  useEffect(() =>
  selectWrapperRef.current.classList.add("select-wrapper"),
  [])

  useEffect(() => {
    if (open) {
      selectWrapperRef.current.classList.add("select-wrapper--open")
    } else {
      selectWrapperRef.current.classList.remove("select-wrapper--open")
    }
  }, [open])

  return (
    <>
      <div ref={selectWrapperRef} onClick={() => setOpen(!open)}>

        <p ref={selectByDefaultOption}>Choose Stack</p>

        <ul className="select-list">
          {stacks.map((stack, i) => {
            return (
              <li key={i} className="select-item">
                <button className="select-button" onClick={evt => selectByDefaultOption.current.textContent = evt.target.textContent}>
                  {stack}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Select