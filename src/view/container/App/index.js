import React from 'react'
// import { Helmet } from 'react-helmet'
import 'antd/dist/antd.css'
import Navigation from '../../components/manuBar'
class App extends React.Component {
  render() {
    return (
      <Navigation>
        <div>
          {/* <Helmet>
            <title>Fax Mail</title>
            <meta name="description" content="FaxMail application management fax and email from customers" />
          </Helmet> */}
        </div >
      </Navigation>
    )
  }
}

export default App