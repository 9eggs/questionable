import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import Button from './components/Button';
import Label from './components/Label';
import Input from './components/Input';
import Field from './components/Field';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

ReactDOM.render(
    <Button label="boom"/>,
    document.getElementById('button') as HTMLElement
);

ReactDOM.render(
    <Input type="text" id="test" name="test" value=""/>,
    document.getElementById('input') as HTMLElement
);

ReactDOM.render(
    <Label htmlFor="boom" label="form label"/>,
    document.getElementById('label') as HTMLElement
);


ReactDOM.render(
    <Field heading="Hello" label="boo">
        <Label htmlFor="boom" label="form label"/>
    </Field>,
    document.getElementById('field') as HTMLElement
);

registerServiceWorker();
