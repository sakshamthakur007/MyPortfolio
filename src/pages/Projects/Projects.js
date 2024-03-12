import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div>
      <div className="container project">
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'> TOP recent Projects</h2>
        <hr />
        <p className='pb-3 text-center'> 
            Here are my recent projects with live link and source code
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex velit est soluta recusandae eos, eligendi unde rerum repudiandae quos optio mollitia nisi provident quas et sapiente aspernatur, sint nihil sunt magni commodi quasi? Vel repudiandae quaerat ipsum magni eum rem maxime nesciunt nihil in reprehenderit? Suscipit, commodi deleniti! Debitis non voluptatem quisquam, maxime dolorum est optio numquam sapiente repellat nisi, sunt saepe voluptas deleniti ea similique earum pariatur odio natus quia adipisci, fugiat cupiditate in eius hic? Soluta provident facilis reprehenderit quasi possimus enim consequatur saepe ipsa magni blanditiis, animi qui officia iste vero dolorum tenetur quod, excepturi distinctio!</p>
      <div className="row" id='ads'>
        <div className="col-md-4">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">Full Stack</span>
              <img src="" alt="project01" />
            </div>
            <div className="card-image-overly">
              <span className="card-detail-bagde">MongoDb</span>
              <span className="card-detail-bagde">Express</span>
              <span className="card-detail-bagde">React</span>
              <span className="card-detail-bagde">Node</span>
            </div>
            <div className="card-body">
              <div className="ad-title">
                <div className="h5 text-uppercase">Hulk gym website</div>
              </div>
              <a href="https://th.bing.com/th/id/OIP.2zZwOmfPQKhFT4qiJH02sQHaF7?w=236&h=189&c=7&r=0&o=5&pid=1.7" className="ad-btn">View</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects

