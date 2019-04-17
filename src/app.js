import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import App from './theGoods.js'


import configureStore from './redux/configureStore'



//React-Router paths
const AppRouter = () => (
    <BrowserRouter>
        <div>
            {/* <Header/> */}
            <Switch>
                <Route path='/' component={Comp1} exact />
                <Route path='/game' component={Comp2} />
            </Switch>
        </div>
    </BrowserRouter>
)




//Redux Store
const store = configureStore()

store.subscribe(()=>{
    // console.log(store.getState());
})







const jsx = (
    <div>
        <App/>
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'));
