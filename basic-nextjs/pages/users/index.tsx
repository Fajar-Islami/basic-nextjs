import { useEffect } from "react";
import Layout from "../../components/Layout";

interface UserProps {
  dataUsers: any[];
}

export default function User(props: UserProps) {
  const { dataUsers } = props;

  console.log(dataUsers);

  return (
    <Layout pageTitle="User Page">
      <p>Users Page</p>
      {dataUsers.map((user) => (
        <>
          <p>{user.name} </p>
          <p>{user.email} </p>
        </>
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
