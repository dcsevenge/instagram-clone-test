import React from 'react';
import styles from './feed.module.css'
import { faEllipsisV, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faComment, faHeart, faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";
import useFeed from './useFeed';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Feed = ({ users }) => {
    const useProps = useFeed({ users });
    const {
      items,
      like,
      handleClicks,
      handleToggleLike,
      fetchMoreData
    } = useProps;

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
              const { username, avatar: imageUrl, employment, id, isLiked, likeCount } = item;
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
                              <span className={isLiked ? styles.isLikedLink : styles.iconLink}>
                                <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeart} onClick={() => handleToggleLike(id)} />
                              </span>
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
                        <span className={styles.profileLinkText}>ถูกใจ {numberWithCommas(likeCount)} คน</span>
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
