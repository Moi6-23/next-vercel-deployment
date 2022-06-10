import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout';


export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
        <h1 className='title'>
          Ir a{" "}
          <Link href="/about" replace>
            About
          </Link>
        </h1>
        <h1 className='title'>
          Ir a{" "}
          <Link href="/contact" replace>
            Contact
          </Link>
        </h1>
    </MainLayout>
  );
}
