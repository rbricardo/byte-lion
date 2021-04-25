import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { GoogleLogin } from 'react-google-login'
import { getComments } from '../services/comments'
import { cardsInfos } from '../helpers/mocks/cardsInfos'
import CommentCard from '../components/CommentCard'
import MainCard from '../components/MainCard'

const Home: React.FC = () => {
  const [page, setPage] = useState(1)
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function loadComments() {
    setIsLoading(true)
    try {
      const { data } = await getComments(page, 3)
      const newComments = comments.concat(data)
      setComments(newComments)
      setPage(page + 1)
      setIsLoading(false)
    } catch (error) {
      alert('Ops, somthing wrong happened')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadComments()
  }, [])

  const responseGoogle = (response) => {
    console.log(response)
  }

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
          <div>
            <GoogleLogin
              clientId="700739214835-5bkglg53lsc3bhmvu3tr5mod8mbjbsr5.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-auto">
        <div className="flex flex-col md:flex-row relative bottom-32 md:justify-around items-center">
          {cardsInfos.map((cardInfo) => {
            const { description, id, imgPath, title } = cardInfo
            return (
              <div key={id}>
                <MainCard
                  imgPath={imgPath}
                  title={title}
                  description={description}
                />
              </div>
            )
          })}
        </div>
        <div className="flex justify-center pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {comments?.map((comment) => {
              const { body, email, name, id } = comment
              return (
                <div key={id}>
                  <CommentCard body={body} email={email} name={name} />
                </div>
              )
            })}
          </div>
        </div>
        <div
          className="flex justify-center items-center w-full h-10 bg-gradient-to-r from-green-400 to-blue-500 text-center cursor-pointer opacity-75 hover:opacity-100"
          onClick={loadComments}
        >
          <p className="text-lg text-white">
            {isLoading ? 'Loading...' : 'Load more comments'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
