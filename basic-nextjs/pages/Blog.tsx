import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}

export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title} </h3>
          <p>{blog.body} </p>
        </div>
      ))}
    </Layout>
  );
}

// Data tidak dibuat langsung html nya,  karena tipe data ini dinamis
// Cocok untuk api bersifat dinamis
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await res.json(); // diubah jadi json
  return {
    props: {
      dataBlog,
    },
  };
}
