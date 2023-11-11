import React, {useState, useEffect} from 'react'
import List from './components/List/List'
import Spysok from './components/Spysok/Spysok'
import User from './components/User/User'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

export default function App() {
  const [showList, setShowList] = useState(false);
  const [showSpysok, setShowSpysok] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    setTimeout(() => {
      // setShowSpysok(false);
    }, 1500)
  }, [])

  const deleteUser = () => {
    setShowUser(false);
  }

  const getPost = value => setPost(value);

  return (
    <>
      {showList && <List />}
      {showSpysok && <Spysok />}
      {showUser && <User />}
      {/* <button onClick={deleteUser}>Delete User</button> */}
      <Form liftingPost={getPost} />
      <Posts post={post}  />
    </>
  )
}