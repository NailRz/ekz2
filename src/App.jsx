import { useState } from 'react'
import './App.css'
import PostForm from './assets/components/postForm';
import PostList from './assets/components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'titleText' ,body: 'bodyText'},
    {id: 2,title: 'titleText2' ,body: 'bodyText2'},
    {id: 3,title: 'titleText3' ,body: 'bodyText3'},
    {id: 4, title: 'titleText4' ,body: 'bodyText4'}

  ]);
  const createPost = (newPost) => { 
    setPosts([...posts, newPost])
  }
  return (
    
    <>
    <PostForm create = {createPost}></PostForm>
    <PostList posts = {posts}></PostList>

    </>


  )
}

export default App
