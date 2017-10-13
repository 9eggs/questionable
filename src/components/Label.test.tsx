import * as React from 'react';
import * as enzyme from 'enzyme';
import Label from './Label';

import * as Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

it('renders the correct label', () => {
    const label = enzyme.shallow(<Label htmlFor="test" label='BOOM' />);
    expect(label.text()).toEqual('BOOM');
    expect(label.html()).toContain('for="test"')
});