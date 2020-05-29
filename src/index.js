import dva from 'dva';
import { createBrowserHistory } from 'history'
import './index.css';

const app = dva({
  history: createBrowserHistory()
})

window.app = app

app.router(require('./routes').default);

app.start('#root');
