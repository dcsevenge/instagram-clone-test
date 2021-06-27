import styles from './story.module.css'
import { faHome, faCompass, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';

const Story = () => (
    <div className={styles.story}>
      <div className={styles.profile}>
        <Link href={`/`} replace>
          <a className={styles.profileLink}>
            <div className={styles.profileLinkImage}>
              <Image src="/profile.png" alt="profile" layout="intrinsic" width="48" height="48" />
            </div>
            <div className={styles.profileLinkText}>
              Spongbobasdasddas
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.profile}>
        <Link href={`/`} replace>
          <a className={styles.profileLink}>
            <div className={styles.profileLinkImage}>
              <Image src="/profile.png" alt="profile" layout="intrinsic" width="48" height="48" />
            </div>
            <div className={styles.profileLinkText}>
              inturde1
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.profile}>
        <Link href={`/`} replace>
          <a className={styles.profileLink}>
            <div className={styles.profileLinkImage}>
              <Image src="/profile.png" alt="profile" layout="intrinsic" width="48" height="48" />
            </div>
            <div className={styles.profileLinkText}>
              many.11
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.profile}>
        <Link href={`/`} replace>
          <a className={styles.profileLink}>
            <div className={styles.profileLinkImage}>
              <Image src="/profile.png" alt="profile" layout="intrinsic" width="48" height="48" />
            </div>
            <div className={styles.profileLinkText}>
              fuyuncl
            </div>
          </a>
        </Link>
      </div>
      <div className={styles.profile}>
        <Link href={`/`} replace>
          <a className={styles.profileLink}>
            <div className={styles.profileLinkImage}>
              <Image src="/profile.png" alt="profile" layout="intrinsic" width="48" height="48" />
            </div>
            <div className={styles.profileLinkText}>
              razer.zone22
            </div>
          </a>
        </Link>
      </div>
    </div>
);

export default Story;
