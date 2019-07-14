'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            value: 'Valor inicial',
            checked: false,
            select: '2'
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log('event', e)
                 }}>
                    <textarea name='textarea' defaultValue={'textarea\nvalue'} />
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}

export default App