import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Feed from "../components/Feed";
import Story from "../components/Story";
import Suggest from "../components/Suggest";
import {getUserList} from "../lib/api";
config.autoAddCss = false;

export default function Home({ users, usersStory, usersSuggest }) {
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
          <Suggest users={usersSuggest} />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const users = await getUserList({ size: 3 });
  const usersStory = await getUserList({ size: 10 });
  const usersSuggest = await getUserList({ size: 5 });
  return {
    props: {
      users,
      usersStory,
      usersSuggest
    }
  }
}
