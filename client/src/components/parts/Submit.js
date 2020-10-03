import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class Submit extends React.Component {
  state = {
    title: '',
    description: '',
    dates: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('/api/event')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      description: this.state.description,
      dates: this.state.dates,
    };


    axios({
      url: '/api/matchEvent',
      method: 'POST',
      data: payload
    })
      .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');

      })
      .catch(() => {
        console.log('Internal server error');
      });;
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.dates}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <section className="page-section bg-primary mb-0" id="submit"> 
      <h2 className="page-section-heading text-center text-uppercase text-white">Events</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="container">
          <div id="results" className="blog- text-center mt-4">
            {this.displayBlogPost(this.state.posts)}
          </div>
      </div>

      </section>
    );
  }
}


export default Submit;