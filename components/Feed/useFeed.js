import React, {useEffect, useState} from "react";
import {getUserList} from "../../lib/api";

const useFeed = ({ users }) => {
  const [items, setItems] = useState(users);
  const [updateItems, setUpdateItems] = useState(false);
  const [like, setLike] = useState(null);

  const fetchMoreData = async () => {
    const moreUsers = await getUserList({ size: 3 });
    setTimeout(() => {
      setItems(items.concat(...moreUsers));
    }, 2000);
  };

  let clickTimeout = null;

  useEffect(() => {
    if (updateItems) {
      setUpdateItems(false);
    }
  }, [updateItems])

  const handleToggleLike = id => {
    setUpdateItems(true);
    const indexItem = items.findIndex(item => item.dob.age === id);
    const newItems = items;
    newItems[indexItem] = {
      ...newItems[indexItem],
      isLiked: !newItems[indexItem].isLiked,
      likeCount: !newItems[indexItem].isLiked ? (newItems[indexItem].likeCount + 1) : (newItems[indexItem].likeCount - 1)
    }
    setItems(newItems);
  };
  const handleClicks = id => {
    if (clickTimeout !== null) {
      setLike(id);
      const indexItem = items.findIndex(item => item.dob.age === id);
      const newItems = items;
      if (!newItems[indexItem].isLiked) {
        newItems[indexItem] = {
          ...items[indexItem],
          isLiked: true,
          likeCount: (items[indexItem].likeCount + 1)
        }
        setItems(newItems);
      }
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

  return {
    items,
    setItems,
    updateItems,
    setUpdateItems,
    like,
    setLike,
    handleClicks,
    handleToggleLike,
    fetchMoreData
  }
}

export default useFeed;
