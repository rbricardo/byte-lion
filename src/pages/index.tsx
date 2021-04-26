import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { setUser } from '../store/reducers/user'

import { getComments } from '../services/comments'
import { cardsInfos } from '../helpers/mocks/cardsInfos'
import CommentCard from '../components/CommentCard/CommentCard'
import MainCard from '../components/MainCard/MainCard'
import Banner from '../components/Banner/Banner'
import Button from '../components/Button/Button'
import Header from '../components/Header/Header'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const userData = useSelector((state: RootStateOrAny) => state.user.userData)

  const [page, setPage] = useState(1)
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function loadComments() {
    setIsLoading(true)
    try {
      const { data } = await getComments(page, 2)
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

  const onLoginGoogle = (response) => {
    console.log(response)
    dispatch(setUser(response.profileObj))
  }

  const onLogoutGoogle = () => {
    dispatch(setUser(null))
  }

  return (
    <div className="container mx-auto" style={{ height: 900 }}>
      <Head>
        <title>Byte Lion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-2/3" style={{ backgroundColor: '#989494' }}>
        <Header onLoginGoogle={onLoginGoogle} onLogoutGoogle={onLogoutGoogle} />
        <Banner userData={userData} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
        <Button
          onClick={loadComments}
          isLoading={isLoading}
          title="Load more comments"
        />
      </div>
    </div>
  )
}

export default Home
