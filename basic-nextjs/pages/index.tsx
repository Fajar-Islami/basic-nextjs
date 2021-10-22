import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home </Link>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
          <li>
            <Link href="/users">User</Link>
          </li>
        </ul>
      </header>
      <h1>Welcome ahmad fajar</h1>
    </>
  );
};

export default Home;
