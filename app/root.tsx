import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react'

import ErrorMessage from './components/ErrorMessage'
import styles from './css/style.css'

export const links: LinksFunction = () => [
  ...(styles ? [{ rel: 'stylesheet', href: styles }] : []),
]

export const meta: MetaFunction = () => {
  return [{ title: 'BuCode 2025' }]
}

export const loader = () => {
  return null
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body id="root">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorMessage error={error as Error} />
        <Scripts />
      </body>
    </html>
  )
}
