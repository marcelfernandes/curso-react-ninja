'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {

    render () {
        return (
            <div>
                <Button handleClick={() => console.log('click')}>
                    Click
                </Button>
            </div>
        )
    }
}

export default App