import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
function Home() {

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home page" key="desc" />
                <meta property="og:title" content="ID flow home page" />
                <meta
                    property="og:description"
                    content="And a social description for our cool page !!"
                />
                <meta
                    property="og:image"
                    content={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}
                />
            </Head>
            <div>
                <h1>Home</h1>
                <span>Navigate to </span><Link href={'/'}>Root</Link>
            </div>
        </>
    )
}

export default Home