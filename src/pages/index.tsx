import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import Head from 'next/head'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>home - next-material-ui-template</title>
      </Head>

      <div>
        <Button color="primary" variant="contained">
          hello world
        </Button>
      </div>
    </>
  )
}

export default HomePage