import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Conteudo from './pages/devStore/conteudo'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={Conteudo} />
            </Switch>
        </BrowserRouter>
    )
}