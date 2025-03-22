import React, { useEffect } from 'react'
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice';
import axios from "axios";
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) => store.feed)
  const dispatch = useDispatch();
  const getFeed = async () => {
    if(feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {withCredentials: true})
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err.message)
    }
  }
  
  useEffect(() => {
    getFeed();
  }, [])
  return (
    feed && (<div className='flex justify-center my-10'>
      {feed.map(data => <UserCard user={data}/>
    )}
    </div>)
  )
}

export default Feed