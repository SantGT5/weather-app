import './Input.style.scss'

import type { InputType } from './type'

export const Input = ({ onChange, name }: InputType): JSX.Element => {
  return (
    <div className="wrapper-input">
      <input type="text" onChange={onChange} name={name} />
    </div>
  )
}
