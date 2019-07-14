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
                <form>
                    <input type='text' value={this.state.value} onChange={(e) => {
                        console.log(e)
                        this.setState({
                            value: e.target.value
                        })
                    }} />

                    <label>
                        <input type='checkbox' value='my-checkbox' 
                            checked={this.state.checked}
                            onChange={(e) => {
                                this.setState({
                                    checked: e.target.checked
                                })
                            }} />
                        Checkbox
                    </label>

                    <input type='radio' name='rd' value='1' /> radio 1
                    <input type='radio' name='rd' value='2' defaultChecked /> radio 2

                    <br /><br /><br />

                    <select multiple value={this.state.select} onChange={(e) => {
                        this.setState({
                            select: e.target.select
                        })
                    }}>
                        <option value='1'>Opt 1</option>
                        <option value='2'>Opt 2</option>
                        <option value='3'>Opt 3</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default App