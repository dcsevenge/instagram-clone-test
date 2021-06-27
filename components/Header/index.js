import styles from './header.module.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCompass } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <nav className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.flexbox}>
        <div className={styles.logo}>
          <Link href={`/`} replace>
            <a>
              <Image src="/instagram.png" alt="instagram" layout="intrinsic" width="103" height="29" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.flexbox}>
        <input className={styles.searchBox} type="text" placeholder="ค้นหา" />
      </div>
      <div className={styles.flexbox}>
        <Link href={`/`} replace>
          <a className={styles.iconLink}>
            <FontAwesomeIcon icon={faHome} />
          </a>
        </Link>
        <Link href={`/`} replace>
          <a className={styles.iconLink}>
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </a>
        </Link>
        <Link href={`/`} replace>
          <a className={styles.iconLink}>
            <FontAwesomeIcon icon={faCompass} />
          </a>
        </Link>
        <Link href={`/`} replace>
          <a className={styles.iconLink}>
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </Link>
        <div className={styles.profile}>
          <Link href={`/`} replace>
            <a className={styles.profileLink}>
              <Image src="/profile.png" alt="profile" layout="intrinsic" width="22" height="22" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
export default Header;
