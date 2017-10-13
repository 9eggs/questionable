import * as React from 'react';
import * as enzyme from 'enzyme';
import Button from './Button';

import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders the correct text when no enthusiasm level is given', () => {
    const button = enzyme.shallow(<Button label='BOOM' />);
    expect(button.text()).toEqual('BOOM')
});