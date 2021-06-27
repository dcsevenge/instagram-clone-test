import React, { useState, useEffect } from 'react';
import styles from './feed.module.css'
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faComment, faHeart, faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";
import { getUserList } from "../../lib/api";
// import Skeleton from 'react-loading-skeleton';

const Feed = ({ users }) => {
    const [items, setItems] = useState(users);
    const [like, setLike] = useState(null);
    const fetchMoreData = async () => {
        const moreUsers = await getUserList({ size: 3 });
        setTimeout(() => {
            setItems(items.concat(...moreUsers));
        }, 2000);
    };
    let clickTimeout = null;
    const handleClicks = id => {
      if (clickTimeout !== null) {
        setLike(id);
        setTimeout(() => {
          setLike(null);
        }, 1000);
        clearTimeout(clickTimeout)
        clickTimeout = null
      } else {
        clickTimeout = setTimeout(() => {
          clearTimeout(clickTimeout)
          clickTimeout = null
        }, 1000)
      }
    }
    const HeartComponent = ({ id }) => {
      return (
          <svg className={like === id ? styles.heartActive : styles.heart} viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
          </svg>
      );
    }
    const LoaderComponent = () =>  (
        <div className={styles.ldsSpinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
    return (
        <InfiniteScroll
            className={styles.scroll}
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<LoaderComponent />}
        >
          <div className={styles.feed}>
            {items.map((item, index) => {
              const { username, avatar: imageUrl, employment, id } = item;
              return (
                  <div className={styles.feedBlock} key={index}>
                    <div className={styles.feedHeader}>
                      <div className={styles.profile}>
                        <Link href={`/`} replace>
                          <a className={styles.profileLinkImage}>
                            <Image src={imageUrl} alt="profile" layout="intrinsic" width="48" height="48" />
                          </a>
                        </Link>
                        <Link href={`/`} replace>
                          <a className={styles.profileLinkText}>
                            {username}
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
                      <Image src={imageUrl} alt="mountain" layout="responsive" height={1024} width={1024} onClick={() => handleClicks(id)} />
                      <HeartComponent id={id} />
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
                      <div className={styles.feedCaption}>
                        <Link href={`/`} replace>
                          <a className={styles.profileLinkText}>
                            {username}
                          </a>
                        </Link>
                        <span className={styles.feedCaptionContent}>{employment.title}</span>
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
                        <div className={styles.feedInputCommentBox}>
                          <input type="text" placeholder="เพิ่มความเห็น" className={styles.inputComment} />
                        </div>
                        <div className={styles.flexbox}>
                          <Link href={`/`} replace>
                            <a className={styles.postLink}>
                              โพสต์
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })}
          </div>
        </InfiniteScroll>
    );
}

export default Feed;
