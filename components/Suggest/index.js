import styles from './suggest.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Suggest = ({ users }) => (
    <div className={styles.suggest}>
      {users.map((user, index) => {
        const { username, avatar: imageUrl } = user;
        return (
            <div className={styles.profile} key={index}>
              <Link href={`/`} replace>
                <a className={styles.profileLink}>
                  <div className={styles.profileLinkImage}>
                    <Image src={imageUrl} alt="profile" layout="intrinsic" width="48" height="48" />
                  </div>
                  <div className={styles.profileLinkText}>
                    {username}
                  </div>
                </a>
              </Link>
            </div>
        )
      })}
    </div>
);

export default Suggest;
