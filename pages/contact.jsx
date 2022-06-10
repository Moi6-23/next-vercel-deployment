import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout';

export default function contact(){
    return (
      <MainLayout>
        <h1>About page</h1>
        <h1 className="title">
          Ir a{" "}
          <Link href="/" replace>
            Home
          </Link>
        </h1>
        <h1 className="title">
          Ir a{" "}
          <Link href="/about" replace>
            About
          </Link>
        </h1>
        <h1 className="title">
          Ir a{" "}
          <Link href="/price/pricing" replace>
            Price
          </Link>
        </h1>

        <p className="description">
          Get started by editing{" "}
          <code className='code'>pages/contact.js</code>
        </p>
      </MainLayout>
    );
}