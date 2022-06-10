import React from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import Link from 'next/dist/client/link'
export default function pricing(){
  return (
    <MainLayout>
        <h1>Pricing page</h1>
          <h1 className="title">
            Ir a{" "}
            <Link href="/" replace={false}>
              Home
            </Link>
          </h1>
          <h1 className="title">
            Ir a{" "}
            <Link href="/contact" replace={false}>
              Contact
            </Link>
          </h1>
          <h1 className="title">
            Ir a{" "}
            <Link href="/about" replace={false}>
              About
            </Link>
          </h1>
          <p className='description'>
            Get started by editing{" "}
            <code className='code'>pages/pricing.js</code>
          </p>
    </MainLayout>
  )
}
