import {useLayoutEffect, EffectCallback, useEffect, useState, Inputs, useRef} from 'preact/hooks'
import {screenXsMobile} from 'styles'

export const useUpdate = (fn: EffectCallback, deps: Inputs = [], layout = false) => {
  const isMount = useRef(true)

  const effect = layout ? useLayoutEffect : useEffect

  effect(() => {
    if (isMount.current) {
      isMount.current = false
    } else {
      fn()
    }
  }, deps)
}

export function useMedia(width = screenXsMobile) {
  const [isMatch, setMatch] = useState(window.innerWidth < width - 1)

  useEffect(() => {
    const handleResize = () => setMatch(window.innerWidth < width - 1)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMatch
}
