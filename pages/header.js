/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'

function Header({children}) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet"/>
                <meta property="og:title" content="PopNFT"/>
                <meta property="og:description" content="The abundance of information from the NFT collection can be slightly confusing for people recently joining the NFT community. All information is parsed over social media: Discord, Twitter, and actually require a lot of time to filter them. To provide the solution, a tool must be created that will filter, verify and offer the information to its users. This service will save you this time, and it will allow NFT enthusiasts, whatever their level and knowledge about this field, to know more about what this collection reserves for them, if this collection rewards its supporters."/>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="/favicons/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            {children}
        </div>
    )
}

export default Header
