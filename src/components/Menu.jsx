import React from 'react'

const Menu = () => {

  const posts = [
    {
      id: 1,
      title: "sample 1",
      desc: "sample desc 1",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1600px-Image_created_with_a_mobile_phone.png"
    },
    {
      id: 2,
      title: "sample 2",
      desc: "sample desc 2",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1600px-Image_created_with_a_mobile_phone.png"
    },
    {
      id: 3,
      title: "sample 3",
      desc: "sample desc 3",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1600px-Image_created_with_a_mobile_phone.png"
    },
  ]  

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
