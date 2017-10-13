import * as React from 'react';
import * as enzyme from 'enzyme';
import Input from './Input';

import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders the correct input', () => {
    const input = enzyme.shallow(<Input type="email"/>);
    expect(input.html()).toContain('type="email"');
});