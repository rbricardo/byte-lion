import React from 'react'
import Head from 'next/head'
import Card from '../components/footer/Card'
import { cardsInfos } from '../helpers/mocks/cardsInfos'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto" style={{ height: 900 }}>
      <Head>
        <title>Byte Lion</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="bg-gray-400 h-2/3">
        <div className="flex flex-row justify-around items-center bg-white py-4">
          <div className="w-60">
            <img src="/images/bytelion-logo.png" />
          </div>
          <div>SignIn Google</div>
        </div>
      </div>
      <div className="bg-gray-100 h-auto">
        <div className="flex flex-col md:flex-row relative bottom-32 md:justify-around items-center">
          {cardsInfos.map((cardInfo) => {
            const { description, id, imgPath, title } = cardInfo
            return (
              <div key={id}>
                <Card
                  imgPath={imgPath}
                  title={title}
                  description={description}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
