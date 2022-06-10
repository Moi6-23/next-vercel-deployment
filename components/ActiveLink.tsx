import { useRouter } from 'next/router'
import React, { CSSProperties, FC } from 'react'

import Link from 'next/link'

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
    
}

const styleActive = {
    color: '#f31c00',
}

interface Props{
  text: string;
  href: string;
}

const ActiveLink: FC <Props> = ({href , text}) => {

   const router =  useRouter();
 
  return (
    <Link  href={href}>
        <a style={router.asPath=== href ? style : undefined}>{text}</a>
    </Link>
  )
}

export default ActiveLink