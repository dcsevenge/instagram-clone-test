import styles from './feed.module.css'
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faComment, faHeart, faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';

const imagesList = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg', 'mountain4.jpg'];

const Feed = () => (
    <div className={styles.feed}>
      {imagesList.map((image, index) => (
        <div className={styles.feedBlock} key={index}>
          <div className={styles.feedHeader}>
              <div className={styles.profile}>
                  <Link href={`/`} replace>
                      <a className={styles.profileLinkImage}>
                          <Image src="/profile.png" alt="profile" layout="intrinsic" width="48" height="48" />
                      </a>
                  </Link>
                  <Link href={`/`} replace>
                      <a className={styles.profileLinkText}>
                          sthdda
                      </a>
                  </Link>
              </div>
              <div>
                  <Link href={`/`} replace>
                      <a className={styles.iconLink}>
                          <FontAwesomeIcon icon={faEllipsisV} />
                      </a>
                  </Link>
              </div>
          </div>
          <div className={styles.imageBlock}>
            <Image src={`/${image}`} alt="mountain" layout="responsive" height={1024} width={1024} />
          </div>
            <div className={styles.feedFooterSection}>
              <div className={styles.feedFooter}>
                  <div className={styles.flexbox}>
                      <div>
                          <Link href={`/`} replace>
                              <a className={styles.iconLink}>
                                  <FontAwesomeIcon icon={faHeart} />
                              </a>
                          </Link>
                      </div>
                      <div>
                          <Link href={`/`} replace>
                              <a className={styles.iconLink}>
                                  <FontAwesomeIcon icon={faComment} />
                              </a>
                          </Link>
                      </div>
                      <div>
                          <Link href={`/`} replace>
                              <a className={styles.iconLink}>
                                  <FontAwesomeIcon icon={faPaperPlane} />
                              </a>
                          </Link>
                      </div>
                  </div>
                  <div className={styles.flexbox}>
                      <Link href={`/`} replace>
                          <a className={styles.iconLink}>
                              <FontAwesomeIcon icon={faBookmark} />
                          </a>
                      </Link>
                  </div>
              </div>
            </div>
          <div className={styles.feedFooterSection}>
              <div className={styles.feedFooter}>
                <div className={styles.flexbox}>
                    <Link href={`/`} replace>
                        <a className={styles.iconLink}>
                            <FontAwesomeIcon icon={faSmile} />
                        </a>
                    </Link>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
);

export default Feed;
