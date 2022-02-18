import Head from 'next/head'
import Link from 'next/link'

function Index() {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h1>Blog Page</h1>
            <Link  href='/blog/firstBlog'>
            <a>First Blog</a>
            </Link>
            <Link href='/blog/secondBlog'>
            <a >Second Blog</a>
            </Link>
            
        </div> 
    )
}
 
export default Index
