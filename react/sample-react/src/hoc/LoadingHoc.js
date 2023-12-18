import React from 'react'

export default function LoadingHoc(Component) {

  return function componentWithLoading({isLoading, ...props}){
    if(!isLoading) return <Component {...props}/>
    return <div>Loading......</div>
  }
}
