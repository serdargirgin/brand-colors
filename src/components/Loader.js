import React from 'react'
import ContentLoader from "react-content-loader"

const Loader = props => (
    <ContentLoader
      width={400}
      height={40}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
    <rect x="0" y="-1" rx="0" ry="0" width="207" height="17" /> 
    <rect x="2" y="33" rx="0" ry="0" width="70" height="40" /> 
    <rect x="76" y="33" rx="0" ry="0" width="70" height="40" /> 
    <rect x="150" y="33" rx="0" ry="0" width="70" height="40" /> 
    <rect x="224" y="32" rx="0" ry="0" width="70" height="40" />
    </ContentLoader>
  )


export default Loader