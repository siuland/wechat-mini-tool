import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'primary' | 'default'
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'default' 
}) => {
  return (
    <button 
      className={`btn ${type === 'primary' ? 'btn-primary' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button