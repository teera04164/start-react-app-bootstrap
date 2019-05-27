
import React from 'react'
import { Card ,Icon} from 'antd'

class NotFound extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillReceiveProps({ props }) {
        this.setState({ ...this.state, props })
    }
    render() {
        const { content } = this.props
        return (
            <div>
                <Card>
                    <center> <h1 style={{ color: '#e8e8e8' }} >"Not found"</h1>
                        <Icon type="file-exclamation" style={{ fontSize: '1500%', color: '#e8e8e8', width: '100%', height: '10%' }} />
                    </center>
                </Card>
            </div>
        )
    }
}

export default  NotFound