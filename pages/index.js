import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [planetInput, setplanetInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ planet: planetInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setplanetInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Planet World</title>
        <link rel="icon" href="/planet.svg" />
      </Head>

      <main className={styles.main}>
        <img src="/planet.svg" className={styles.icon} />
        <h3>Ask about a planet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="planet"
            placeholder="Enter a Planet"
            value={planetInput}
            onChange={(e) => setplanetInput(e.target.value)}
          />
          <input type="submit" value="Ask" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
