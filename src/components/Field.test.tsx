import * as React from 'react';
import * as enzyme from 'enzyme';
import Field from './Field';

import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders the correct field', () => {
    const field = enzyme.shallow(<Field label="test"/>);
    expect(field.html()).toContain('test');
    expect(field.html()).toContain('class="field"');
});