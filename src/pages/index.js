import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto" style={{ height: 900 }}>
      <Head>
        <title>Byte Lion</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="bg-gray-400 h-2/3">
        <div className="flex flex-row justify-around items-center bg-white py-4">
          <div className="w-60"><img src="/images/bytelion-logo.png" /></div>
          <div>SignIn Google</div>
        </div>
      </div>
      <div className="bg-gray-100 h-1/3">
        <div className="">
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </div>
  )
}
