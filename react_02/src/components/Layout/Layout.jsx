import React from 'react'
// import List from './../List/List'
// import ListClass from './../ListClass/ListClass'
import ListInterval from './../ListInterval/ListInterval'

export default function Layout() {
  const humans = [`Jack`, `Anna`, `Sasha`];

  return (
    <>
      <h3>Layout</h3>
      
      {/* <List list={[`cat`, `dog`, `lion`]} />
      <List list={humans} />
      <List /> */}

      {/* <hr></hr> */}

      {/* <ListClass list={[`cat`, `dog`, `lion`]} />
      <ListClass list={humans} />
      <ListClass /> */}

      <ListInterval list={humans} color={`green`} />
      <ListInterval />
    </>
  )
}
