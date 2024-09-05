import {useLayoutEffect, EffectCallback, useEffect, Inputs, useRef} from 'preact/hooks'

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

// export const useMedia = (width = screenXsMobile) => {
//   const getMediaMatch = useCallback(() => window.innerWidth < width - 1, [])

//   const [isMatch, setMatch] = useState(getMediaMatch())

//   useEffect(() => {
//     const handleResize = () => setMatch(getMediaMatch())

//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   return isMatch
// }
