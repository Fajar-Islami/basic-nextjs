import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/User.module.css";

interface UserProps {
  dataUsers: any[];
}

export default function User(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="User Page">
      <p>Users Page</p>
      {dataUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
          className={styles.card}
        >
          <p>{user.name} </p>
          <p>{user.email} </p>
        </div>
      ))}
    </Layout>
  );
}

// Pemanggilan api di sisi server
// Halaman ini sudah dibundle terlebih dahulu sebelum halamannya muncul
// Tidak cocok untuk data dinamis
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
