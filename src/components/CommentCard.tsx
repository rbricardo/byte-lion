import React from 'react'

interface Props {
  body: string
  email: string
  name: string
}

const CommentCard: React.FC<Props> = ({ body, email, name }) => {
  const bodyText = body.length > 165 ? `${body.substring(0, 165)}...` : body
  return (
    <div className="flex flex-col md:h-40 h-auto w-auto md:w-96 m-4 md:m-0 shadow-lg bg-white rounded-lg">
      <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-auto text-center py-2 rounded-t-lg">
        <div className="">
          <p className="text-white">{email}</p>
        </div>
        <div className="">
          <p className="text-xs text-white">{name}</p>
        </div>
      </div>
      <div className="px-10 pt-2">
        <p className="text-sm font-medium">{bodyText}</p>
      </div>
    </div>
  )
}

export default CommentCard
