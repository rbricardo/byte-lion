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
        className="flex justify-center items-center w-full h-10 bg-gradient-to-r from-green-400 to-blue-500 text-center cursor-pointer opacity-75 hover:opacity-100 text-lg text-white"
        onClick={onClick}
        title="button"
      >
        {isLoading ? 'Loading...' : title}
      </button>
    </>
  )
}

export default Button
