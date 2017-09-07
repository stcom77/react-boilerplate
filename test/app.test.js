import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import {renderWithStore} from './test_helper';
import sinon from 'sinon';

import TestComp from '../src/components/TestComp';

describe('test', ()=>{
  it('should make test', ()=>{
    const clickCallback = sinon.spy();
    const wrapper = shallow(
      <TestComp onClick={clickCallback} />
    );
    wrapper.find('div').first().simulate('click');
    expect(wrapper.find('div')).to.have.length(10);
    sinon.assert.called(clickCallback);
  });
});
