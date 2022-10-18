import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { client } from "../client"
import { feedQuery, searchQuery } from '../utils/data'
import MasonryLayout from "./MasonryLayout"
import Spinner from "./Spinner"

function Feed() {
  const [loading, setLoading] = useState(false)
  const [pins,setPins]=useState(null)
  const { catagoryId } = useParams();
  useEffect(() => {
    setLoading(true)
    if (catagoryId) {
      const query = searchQuery(catagoryId)
      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false)
      })

    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false)
      })
    }
  },[catagoryId])
  // if(loading) return <Spinner message="we are adding new feeds for you"/>
  return (
    <div>
      Feed
    </div>
  )
}

export default Feed
