import React, { Component } from 'react';
import Link from 'react-router-dom'
import './index.css'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsValue: ''
        }
    }
    componentDidMount() {
        this.setState({ optionsValue: 0 });
    }
    render() {
        const { optionsValue } = this.state;
        return (
            <div className="index flex-col flex-x-center flex-y-center">
                <div className="choice flex-space-between flex-y-center flex-row">
                    <div className="flex-row flex-space-between flex-y-center">
                        <select id="all" value={optionsValue}>
                            <option value="0">全部</option>
                            <option value="1">已完成</option>
                            <option value="2">未完成</option>
                        </select>
                        <div className="icon-select flex-x-center flex-y-center flex-row">
                            <label htmlFor="all flex-x-center flex-y-center flex-row">
                                <img src="../../images/select.png" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <Link to="{`/addList`}">
                            <p>添加</p>
                        </Link>
                    </div>
                </div>
            </div >
        );
    }
}

export default Index;