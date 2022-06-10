import React from 'react'
import styles from './NavBar.module.css'
import ActiveLink from './ActiveLink'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/price/pricing'
  },
];


const Navbar = () => {


  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map((el, indice) => (
          <ActiveLink
            key={indice}
            href={el.href}
            text={el.text}
          />
        ))
      }  
    </nav>
  )
}

export default Navbar