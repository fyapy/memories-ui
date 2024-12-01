import {useContext, useEffect, useState, useRef} from 'preact/hooks'
import {ComponentChildren, createContext, VNode, JSX} from 'preact'
import {MatchFunction, match} from 'path-to-regexp'

type GuardResult = {
  to: string
  replace?: boolean
} | undefined

export type Guard = (() => Promise<GuardResult>) | (() => GuardResult)

interface NavigateOptions {
  replace?: boolean
  disable?: boolean
}

export type NavigateFunction = (url: string, opts?: NavigateOptions) => void

interface Path {
  matchFn: MatchFunction<any>
  component: AsyncFC
  guard?: Guard
}

interface RouterContext {
  matchedPath: string
  addRoute(path: string, component: () => VNode, guard?: Guard): void
  removeRoute(path: string): void

  search: string
  params: Record<string, string>
  pathname: string
  navigate: NavigateFunction
  setSearch(params: Record<string, string>): void
}

const initialContext = (): RouterContext => ({
  matchedPath: '',
  addRoute: () => {},
  removeRoute: () => {},
  params: {},
  search: location.search,
  pathname: location.pathname,
  navigate: () => {},
  setSearch: () => {},
})

const Context = createContext(initialContext())

// eslint-disable-next-line react-refresh/only-export-components
export const useRouter = () => useContext(Context)!

function removeSearch(path: string) {
  return path.split('?')[0]
}

export const Router = ({children, onStart, onEnd}: {
  basename?: string
  onStart(): void
  onEnd(): void
  children: ComponentChildren
}) => {
  const pathsRef = useRef<Record<string, Path>>({})
  const [state, setState] = useState(initialContext)

  async function addRoute(path: string, component: AsyncFC, guard?: Guard) {
    const matchFn = match(path)

    pathsRef.current = {...pathsRef.current, [path]: {matchFn, component, guard}}

    const isMatch = matchFn(state.pathname)

    if (isMatch) {
      const isNotPermitted = await guard?.()
      if (isNotPermitted) {
        return navigate(isNotPermitted.to, {replace: isNotPermitted.replace})
      }

      await component.asyncData?.({
        search: location.search,
        params: isMatch.params as any,
      })
    }

    setState(old => {
      if (isMatch) {
        return {...old, matchedPath: path, params: isMatch.params as any}
      }

      return old
    })
  }

  function removeRoute(path: string) {
    delete pathsRef.current[path]
  }

  function findMatchedPath(nextPath: string) {
    for (const path in pathsRef.current) {
      const pathRef = pathsRef.current[path]
      const isMatch = pathRef.matchFn(nextPath)

      if (isMatch) {
        return {
          params: isMatch.params,
          matchedPath: path,
          component: pathRef.component,
          guard: pathRef.guard,
        }
      }
    }

    return {
      params: {},
      matchedPath: '',
      component: (() => {}) as AsyncFC,
      guard: undefined,
    }
  }

  async function navigate(nextPath: string, opts?: NavigateOptions) {
    onStart()

    if (!opts?.disable) {
      if (opts?.replace) {
        history.replaceState({}, '', nextPath)
      } else {
        history.pushState({}, '', nextPath)
      }
    }

    const {params, matchedPath, component, guard} = findMatchedPath(removeSearch(nextPath))

    const isNotPermitted = await guard?.()
    if (isNotPermitted) {
      return navigate(isNotPermitted.to, {replace: isNotPermitted.replace})
    }

    await component.asyncData?.({
      search: location.search,
      params,
    })

    setState(old => ({
      ...old,
      params,
      matchedPath,
      search: location.search,
      pathname: location.pathname,
    }))

    onEnd()
  }

  function setSearch(params: Record<string, string>) {
    const searchParams = new URLSearchParams(params)

    navigate(`${state.pathname}${searchParams && `?${searchParams}`}`, {replace: true})
  }

  useEffect(() => {
    function handlePopstate() {
      navigate(location.pathname, {disable: true})
    }

    window.addEventListener('popstate', handlePopstate)
    return () => window.removeEventListener('popstate', handlePopstate)
  }, [])

  return (
    <Context.Provider value={{
      matchedPath: state.matchedPath,
      addRoute,
      removeRoute,
      params: state.params,
      search: state.search,
      pathname: state.pathname,
      navigate,
      setSearch,
    }}>
      {children}
    </Context.Provider>
  )
}

export const Route = ({path, component: Component, guard}: {
  path: string
  component(): JSX.Element
  guard?: Guard
}) => {
  const {addRoute, removeRoute, matchedPath} = useRouter()

  useEffect(() => {
    addRoute(path, Component, guard)
    return () => removeRoute(path)
  }, [])

  if (matchedPath === path) {
    return <Component />
  }

  return null
}


export const Link = ({to, className, onClick, children}: {
  to: string
  className?: string
  children: ComponentChildren
  onClick?(event: MouseEvent): void
}) => {
  const {navigate} = useRouter()

  return (
    <a
      onClick={e => {
        e.preventDefault()
        navigate(to)
        onClick?.(e)
      }}
      href={to}
      className={className}
    >
      {children}
    </a>
  )
}

export interface AsyncContext {
  search: string
  params: Record<string, string>
}

export type AsyncFC = {
  displayName: string
  asyncData?(ctx: AsyncContext): Promise<any>
} & (() => JSX.Element)
