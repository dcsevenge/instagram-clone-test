import React, { useState } from 'react';
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
    const fetchMoreData = async () => {
        const moreUsers = await getUserList({ size: 3 });
        setTimeout(() => {
            setItems(items.concat(...moreUsers));
        }, 2000);
    };
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
                    const { username, avatar: imageUrl, employment } = item;
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
                                <Image src={imageUrl} alt="mountain" layout="responsive" height={1024} width={1024} />
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
