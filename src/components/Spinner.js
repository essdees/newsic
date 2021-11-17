import React, { Component } from 'react'
import loading from './ajax-loader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-6" src={loading} alt="" />
            </div>
        )
    }
}

export default Spinner
