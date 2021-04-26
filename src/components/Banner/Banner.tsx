import React from 'react'

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-2/4">
      <p className="text-white text-6xl md:text-8xl">Hi user</p>
      <p className="text-white md:text-base text-sm text-center mt-6">
        Color really isn{"'"}t that difficult to get right, if you know where to
        start.
      </p>
      <p className="text-white md:text-base text-sm text-center">
        Learn by doing and you will be a master in no time
      </p>
    </div>
  )
}

export default Banner
