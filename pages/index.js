import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Feed from "../components/Feed";
import Story from "../components/Story";
import {getUserList} from "../lib/api";
config.autoAddCss = false;

export default function Home({ users, usersStory }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.flexLeft}>
          <Story users={usersStory} />
          <Feed users={users} />
        </div>
        <div className={styles.flexRight}>

        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const users = await getUserList();
  const usersStory = await getUserList();
  return {
    props: {
      users,
      usersStory
    }
  }
}
