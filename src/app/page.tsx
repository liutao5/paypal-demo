import styles from "./page.module.css";
import PaypalButton from "@/components/PaypalButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <PaypalButton />
      </div>
    </main>
  );
}
