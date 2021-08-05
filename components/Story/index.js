import styles from './story.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Story = ({ users }) => (
    <div className={styles.story}>
      {users.map((user, index) => {
        const { login: { username }, picture: { large: imageUrl } } = user;
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

export default Story;
