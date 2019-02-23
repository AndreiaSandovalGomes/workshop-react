import React, { Component } from 'react';
import Button from '../Commons/Button';
import List from './List'

const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=Nr19rB5ZRAJCdLgBjORhG5AnOEwuJjRI&q=high%20five&limit=25&offset=0&rating=G&lang=en';

class WraperGifs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        this.setState({
          gifs: res.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    const { gifs } = this.state

    return (
      <section>
        <Button>LoadGifs</Button>
        <List gifs={gifs}/>
      </section>
    )
  }

}

export default WraperGifs;
