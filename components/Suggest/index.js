import styles from './suggest.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Suggest = ({ users }) => (
    <div className={styles.suggest}>
      <div className={styles.flexbox}>
        <div className={styles.profile}>
            <Link href={`/`} replace>
                <a className={styles.profileLink}>
                    <Image src="/profile.png" alt="profile" layout="intrinsic" width="60" height="60" />
                </a>
            </Link>
        </div>
        <div className={styles.profileName}>
          <div>
            <Link href={`/`} replace>
              <a className={styles.profileUsername}>
                Spb.boy
              </a>
            </Link>
          </div>
          <div className={styles.profileFullname}>
            Spongbob Kung
          </div>
        </div>
        <div className={styles.changeProfile}>
          <Link href={`/`} replace>
            <a>
              เปลี่ยน
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.tagsBox}>
        <Link href={`/`} replace>
          <a>ประชาสัมพันธ์</a>
        </Link>
        <Link href={`/`} replace>
          <a>งาน</a>
        </Link>
        <Link href={`/`} replace>
          <a>ความเป็นส่วนตัว</a>
        </Link>
        <Link href={`/`} replace>
          <a>ข้อกำหนด</a>
        </Link>
        <Link href={`/`} replace>
          <a>ตำแหน่งที่ตั้ง</a>
        </Link>
        <Link href={`/`} replace>
          <a>
            บัญชียอดนิยม
          </a>
        </Link>
        <p>
          © 2021 INSTAGRAM FROM FACEBOOK
        </p>
      </div>
      {/*{users.map((user, index) => {*/}
      {/*  const { username, avatar: imageUrl } = user;*/}
      {/*  return (*/}
      {/*      <div className={styles.profile} key={index}>*/}
      {/*        <Link href={`/`} replace>*/}
      {/*          <a className={styles.profileLink}>*/}
      {/*            <div className={styles.profileLinkImage}>*/}
      {/*              <Image src={imageUrl} alt="profile" layout="intrinsic" width="48" height="48" />*/}
      {/*            </div>*/}
      {/*            <div className={styles.profileLinkText}>*/}
      {/*              {username}*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*  )*/}
      {/*})}*/}

    </div>
);

export default Suggest;
