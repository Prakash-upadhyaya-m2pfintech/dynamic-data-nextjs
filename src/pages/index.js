import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ReactIcon from '../assets/images/react.png'

function DashBoard() {

    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Checkout our cool page" key="desc" />
                <meta property="og:title" content="Social Title for Cool Page" />
                <meta
                    property="og:description"
                    content="And a social description for our cool page"
                />
                <meta
                    property="og:image"
                    content={'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'}
                />
            </Head>
            <div>
                <h1>DashBoard</h1>
                <span>Navigate to </span> <Link href={'/home'}>Home</Link>
            </div>
        </>
    )
}

export default DashBoard