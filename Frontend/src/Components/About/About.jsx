import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div id='About' className='About'>
        <div className="about-col-1">
          <h1>About us</h1>

          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, suscipit expedita laborum soluta, quis omnis, dolorem necessitatibus et qui unde iste. Esse accusamus vitae rerum architecto laborum ipsam, aspernatur animi voluptate maxime quasi inventore voluptas, dolores doloribus dicta quia, sed non excepturi provident molestias temporibus ex consectetur sapiente iste. Quaerat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolor cum itaque velit ipsum ut facilis numquam praesentium mollitia, dignissimos hic ipsa perspiciatis. Ipsam praesentium nihil pariatur earum ipsum veritatis voluptates fugiat laborum, eum, nam possimus doloremque, quaerat sunt aspernatur dolore nostrum. Explicabo cum sit accusamus dolor deleniti reiciendis qui libero tempora inventore minus odit obcaecati ratione quis, necessitatibus commodi fugiat totam vitae impedit enim quibusdam incidunt neque autem repellendus! Est laborum saepe, consequatur voluptatem dignissimos facere nisi autem nostrum vitae, magni enim omnis tempore sed id libero dicta quibusdam cum commodi quia quas architecto? Repellat repudiandae libero officia eaque.</p>
        </div>
        <div className="about-col-2">

          <img src={about} alt="" className='aboutimg' />
        </div>
    </div>
  )
}

export default About