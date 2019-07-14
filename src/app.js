'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {

    constructor () {
        console.log('constructor')
        super()
        this.state = {
            color: 'gray'
            ,showTimer: true
            ,time: 0
        }
    }

    componentWillMount () {
        console.log('component will mount')
    }
    componentDidMount () {
        console.log('component did mount')
    }

    render () {
        console.log('render')
        return (
            <div>
                <Timer time={this.state.time} />

                <button onClick={() => {
                    this.setState({ time: this.state.time + 10 })
                }}>Change props</button>


                <Square color={this.state.color} />

                {['red','green','blue'].map((color) => (
                    <Button
                        key={color}
                        handleClick={() => this.setState({ color })}>
                        {color}
                    </Button>
                ))}

                
            </div>
        )
    }
}

export default App