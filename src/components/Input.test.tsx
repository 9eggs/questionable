import * as React from 'react';
import * as enzyme from 'enzyme';
import Input from './Input';

import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders the correct input type', () => {
    const input = enzyme.shallow(<Input type="email" id="x" name ="x" value=""/>);
    expect(input.html()).toContain('type="email"');
    expect(input.html()).toContain('id="x"');
    expect(input.html()).toContain('name="x"');
    expect(input.html()).toContain('value=""');
    expect(input.html()).toContain('required');
    expect(input.html()).toContain('aria-required="true"');
});