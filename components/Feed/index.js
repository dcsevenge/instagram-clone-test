import { useState } from 'react';
import styles from './feed.module.css'
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faComment, faHeart, faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import Link from 'next/link';
import InfiniteScroll from "react-infinite-scroll-component";
import { getUserList } from "../../lib/api";

const Feed = ({ users }) => {
    const [items, setItems] = useState(users);
    const fetchMoreData = async () => {
        const moreUsers = await getUserList();
        setItems(items.concat(...moreUsers));
    };
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <div className={styles.feed}>
                {items.map((item, index) => {
                    const imageUrl = item.avatar;
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
                                            {item.username}
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
                    )
                })}
            </div>
        </InfiniteScroll>
    );
}

export default Feed;
