import styles from "@styles/Home.module.scss";

const user = {
  user: process.env.NEXT_PUBLIC_DB_USER,
  pass: process.env.DB_PASS,
};
console.log(user);

export default function Home() {
  return (
    <div className={styles.container}>
      <p id={styles.title}>Duy Anh</p>
    </div>
  );
}

export async function getAccountInfo() {
  return {
    props: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  };
}
