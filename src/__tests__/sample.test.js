import App from '../App';
import {shallow, configure} from 'enzyme';
import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

describe('App Tsting', () => {
    
    it('should render App without crashing', () => {
        shallow(<Aplp/>)
    });

});