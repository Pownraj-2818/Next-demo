import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import '../styles/Home.module.css'

function Home() {
    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>
           <Carousel />
            
        </div>
    )
}

export default Home
