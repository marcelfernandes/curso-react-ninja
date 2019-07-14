'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            checked: false,
            showContent: false
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
                    <br /><br />
                    <label>
                        <input type='checkbox'
                            checked={this.state.checked}
                            onChange={() => {
                                this.setState({
                                    checked: !this.state.checked
                                }, () => {
                                    this.setState({
                                        showContent: this.state.checked
                                    })
                                })
                                
                            }} 
                        /> Mostrar conteúdo
                    </label>
                    <br /><br />
                    <button type='submit'>Enviar</button>
                </form>
                {this.state.showContent && <div>conteudo</div>}
            </div>
        )
    }
}

export default App