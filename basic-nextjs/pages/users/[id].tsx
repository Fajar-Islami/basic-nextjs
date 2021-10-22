import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const { user } = props;

  return (
    <Layout pageTitle="User Detail">
      <p>{user!.name} </p>
      <p>{user.email} </p>
      <p>{user.phone} </p>
      <p>{user.website} </p>
    </Layout>
  );
}

// getStaticPaths() = Untuk generate halaman masing2 detail user
// wajib return path
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  console.log("paths", paths);

  return {
    paths,
    fallback: true,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

// Untuk memberikan data dari masing2 user
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
