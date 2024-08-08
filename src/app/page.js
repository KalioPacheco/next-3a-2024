"use client" // devtools - renderizar
import { Component } from "react"
import Button from '@mui/material/Button';
import "./styles.css" // relative path

class Home extends Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log("Me renderizo")
  }

  componentDidUpdate() {
    console.log("Me actualizo")
  }

  aumentar = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div className="container">
        <p>Hola mundo x{this.state.count}.!</p>
        <Button 
          variant="contained" 
          onClick={this.aumentar}
          sx={{
            width: "250px"
          }}
        >
          AUMENTAR
        </Button>
      </div>
    )
  }

}

export default Home;