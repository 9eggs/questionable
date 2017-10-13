import * as React from 'react';
import * as enzyme from 'enzyme';
import Field from './Field';

import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders the correct field', () => {
    const field = enzyme.shallow(<Field heading="test"/>);
    expect(field.html()).toContain('<h3>test</h3>');
    expect(field.html()).toContain('class="field"');
});