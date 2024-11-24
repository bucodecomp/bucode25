import { MetaFunction, useRouteError } from '@remix-run/react'

import ErrorMessage from '~/components/ErrorMessage'
import Layout from '~/components/Layout'

export const loader = async () => {
  return null
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      name: 'description',
      content:
        'Ready to battle through the greatest minds in the realm of algorithms? Showcase your skills in BuCode 2025!',
    },
  ]
}

export default function Page() {
  return <div>BuCode2025</div>
}

export function ErrorBoundary() {
  const error = useRouteError()

  return (
    <Layout>
      <ErrorMessage error={error as Error} />
    </Layout>
  )
}
