'use strict'

import React, { Component } from 'react'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {

    constructor () {
        super()
        this.state = {
            text: 'text state'
        }
    }

    render () {
        return (
            <div className='container' onClick={() => this.setState({
                text: 'Outro text state'
            })}>
                {this.state.text}
                {/* <LikeButton />
                <SearchButton />
                <Square /> */}

                {/* <Button>Texto ok</Button> */}
                

                {/* <div className='container' data-id='1'>
                {['blue', 'green', 'blue'].map((square, index) => (
                    <Square key={index} color={ square } />
                ))}
                </div> */}
            </div>
        )
    }
}

export default App