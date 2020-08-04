import {useState, useCallback} from 'react'

type SetTrue = () => void
type SetFalse = () => void
type Toggle = () => void
type SetValue = (value: boolean) => void

export type useToggle = [boolean, SetTrue, SetFalse, Toggle, SetValue]

export default function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue(value => !value), [])

  return [value, setTrue, setFalse, toggle, setValue]
}

