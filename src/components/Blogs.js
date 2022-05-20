import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styling/blogs.css';
import { useSelector, useDispatch} from 'react-redux';

import { setBlogData } from '../features/userSlice';

// GNews API search endpoint
// https://gnews.io/api/v4/search?q=example&token=API-Token'
const API_SearchUrl = "https://gnews.io/api/v4/search?q="
const API_Token = "a9e0c95726532e7bff1f3098bfaa31a7";

const Blogs = () => {

  const {searchInput, blogData} = useSelector( store => store.user)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  const url = `${API_SearchUrl}${searchInput}&token=${API_Token}`
  console.log(url)
 
  useEffect(() => {

    axios.get(url)
    .then( res => {
      console.log(res)
      dispatch(setBlogData(res.data))
      setLoading(false)
    })
    .catch( err => console.log(err))

  }, [searchInput])
  

  return (
    <div>
      {loading ? (<div className='loading'>Loading ...</div>)
               : 
               (<section className='blog-page'>
                  <h1 className='blog-page-header'>Blogs</h1>
                  <div className="blogs">
                    {blogData.articles.map( (blog, index) => {
                      const {title, description, content, url,
                             image, publishedAt} = blog;
                      const {name} = blog.source;
                      return (
                        <a key={index} className='blog' target="_blank" href={url} rel="noreferrer">                       
                            <img src={image} alt={title} />    
                            <div>
                            <h3 className="sourceName">
                                <span>{name}</span>
                                <p>{publishedAt}</p>
                              </h3>
                              <h1>{title}</h1>
                              <p>{description}</p>
                            </div>        
                        </a>
                      )
                    })}
                  </div>

                  {blogData.totalArticles === 0 && (
                    <h1 className="no__blogs">
                      No blogs available 😞 for the provided input. Search something else ...
                    </h1>
                  )}

               </section>)
      }
    </div>
  )
}

export default Blogs