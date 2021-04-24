import React from 'react'

interface Props {
  description: string
  imgPath: string
  title: string
}

const Card: React.FC<Props> = ({ description, imgPath, title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-80 w-64 m-4 md:m-0 shadow-lg bg-white">
      <div className="w-10">
        <img src={imgPath} />
      </div>
      <div className="mt-8 mb-2">
        <p className="text-sm font-medium">{title}</p>
      </div>
      <div className="w-2/3">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  )
}

export default Card
