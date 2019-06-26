import React from 'react'
import {Provider} from 'react-redux'
import {HashRouter , Route , Switch , Redirect} from 'react-router-dom'

import sHome from '@/screens/Home'

export default class IRouter extends React.Component {

    render() {
      
      return (
        <div>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={sHome} />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }


  