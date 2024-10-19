import Image from "next/image";
import styles from "./page.module.css";
import ProfileCard from './components/ProfileCard'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProfileCard name="Blueprint" pronouns="they/them" />
      </main>
    </div>
  );
}
