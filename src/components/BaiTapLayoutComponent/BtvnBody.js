import React, { Component } from 'react'
import BtvnBanner from './BtvnBanner'
import BtvnListItem from './BtvnListItem'

export default class BtvnBody extends Component {
    render() {
        return (
            <div className="container">
                <BtvnBanner/>
                <BtvnListItem/>
            </div>
        )
    }
}
