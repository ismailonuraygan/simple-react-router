import React, { useEffect } from 'react'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import Sendmessage from './Sendmessage';
import Deletemessage from './Deletemessage';

export const Messages = ({login}) => {

    const history = useHistory();

    useEffect(() => {
        if(!login) {
            history.push("/Home")
        }
    },[login, history])

    const {path, url} = useRouteMatch()

    return (
        <div>
            <h1>Messages Page</h1>
            <ul>
                <li>
                    <Link to={`${url}/sendmessage`} >Send Message</Link>
                </li>
                <li>
                    <Link to={`${url}/deletemessage`} >Delete Message</Link>
                </li>
            </ul>
            <Switch>
                <Route path = {`${path}/sendmessage`} component={Sendmessage} />
                <Route path = {`${path}/deletemessage`} component={Deletemessage} />
            </Switch>
        </div>
    )
}
