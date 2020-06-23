import React, { Component } from 'react'
import BtvnHeader from './BtvnHeader'
import BtvnBody from './BtvnBody'
import BtvnFooter from './BtvnFooter'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BtvnHeader/>
                <BtvnBody/>
                <BtvnFooter/>
            </div>
        )
    }
}
