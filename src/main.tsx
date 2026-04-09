import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from '@app/App.js';
import {setupStore} from '@app/providers/store/ui/store.js';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const store = setupStore();

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
