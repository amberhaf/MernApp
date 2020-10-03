import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from 'react-router-dom';

class Quiz extends React.Component {

  state = {
    title: '',
    description: '',
    biology: false,
    chemistry: false,
    physics: false,
    maths: false,    
    pyschology: false,
    computerScience: false,
    engineering: false,
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  getBlogPost = () => {
    axios.get('/api/')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  getSteps = () => {
      const desc = this.post.description
      console.log(desc)
  }

  submit = (event) => {
    event.preventDefault();

    const payload = {
      title: this.state.title,
      description: this.state.description,
      biology: this.state.biology,
      chemistry: this.state.chemistry,
      physics: this.state.physics,
      maths: this.state.maths,
      pyschology: this.state.pyschology,
      computerScience: this.state.computerScience,
      engineering: this.state.engineering,
    };


    axios({
      url: '/api/match',
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

  resetUserInputs = () => {
    this.setState({
      title: '',
      description: '',
      biology: false,
      chemistry: false,
      physics: false,
      maths: false,    
      pyschology: false,
      computerScience: false,
      engineering: false,
    });
  };

  displayBlogPost = (posts) => {

    if (!posts.length) return null;
    localStorage.setItem("mytime", "helloWorld");

    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button><Link to={{ pathname: "/steps", state:post }}>Read</Link></button>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <section  className="page-section bg-primary mb-0" id="quiz">
      <h2 className="page-section-heading text-center text-uppercase text-white">Blogs</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <form onSubmit={this.submit}>
        <div className="container text-center mt-4">
          <div className="form-input checkbox">
          <label>
          Biology:
            <input
              type="checkbox"
              name="biology"
              checked={this.state.biology}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>
          <div className="form-input checkbox">
          <label>
          Chemistry:
            <input
              type="checkbox"
              name="chemistry"
              checked={this.state.chemistry}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>          
          <div className="form-input checkbox">
          <label>
          Physics:
            <input
              type="checkbox"
              name="physics"
              checked={this.state.physics}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>          
          <div className="form-input checkbox">
          <label>
          Maths:
            <input
              type="checkbox"
              name="maths"
              checked={this.state.maths}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>
          <div className="form-input checkbox">
          <label>
          Pyschology:
            <input
              type="checkbox"
              name="pyschology"
              checked={this.state.pyschology}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>
          <div className="form-input checkbox">
          <label>
          Computer Science:
            <input
              type="checkbox"
              name="computerScience"
              checked={this.state.computerScience}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>
          <div className="form-input checkbox">
          <label>
          Engineering:
            <input
              type="checkbox"
              name="engineering"
              checked={this.state.engineering}
              onChange={this.handleChange.bind(this)} />
          </label>
          </div>
          <div>
          <button id="filter" href="results" className="bg-primary text-white rounded">Filter</button>
          </div>
          </div>
          </form>
        <div id="results" className="blog- text-center mt-4">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </section>
    );
  }
}

export default Quiz;