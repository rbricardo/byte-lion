import React from 'react'

interface Props {
  isLoading?: boolean
  onClick: () => void
  title: string
}

const Button: React.FC<Props> = ({ onClick, isLoading = false, title }) => {
  return (
    <>
      <button
        className="flex justify-center items-center w-full h-10 bg-gradient-to-r from-green-400 to-blue-500 text-center cursor-pointer opacity-75 hover:opacity-100"
        onClick={onClick}
      >
        <p className="text-lg text-white">{isLoading ? 'Loading...' : title}</p>
      </button>
    </>
  )
}

export default Button
