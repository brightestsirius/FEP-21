import React, { useState, useEffect } from "react";

export default function List() {
  const [list, setList] = useState([`cat`, `dog`, `lion`]);
  const [color, setColor] = useState(`crimson`);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(`in useEffect`);

    setTimeout(() => {
      setList([]);
    }, 2000);

    setTimeout(() => {
        setColor(`green`);
    }, 3000)

    return () => {
        console.log(`in componentWillUnmout for First useEffect`);
    }

  }, []);

  useEffect(() => {
    console.log(`in useEffect for list`, list);

    return () => {
        console.log(`in componentWillUnmout for List useEffect`);
    }
  }, [list])

  useEffect(() => {
    console.log(`in useEffect for color`, color);

    return () => {
        console.log(`in componentWillUnmout for Color useEffect`);
    }
  }, [color])

  return list.length ? (
    <ul style={{color}}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}
