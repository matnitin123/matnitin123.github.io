import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import chai from 'chai';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
const expectChai = chai.expect;
import TextInput from '../textInput/TextInput';


describe('Check Text Input component', () =>{
    it('Check input field without error', () => {
        const label = 'label input';
        const name = 'input name';
        const placeHolder = 'placeholder';
        const value = 'the input val';
        const onChange = sinon.spy();
        const wrapper = shallow(<TextInput
            name={name}
            label={label}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}/>);
        expectChai(wrapper.find('.input-wrap-label').text()).to.equal(label);
        expectChai(wrapper.find('.alert-danger-text').length).to.equal(0);
    });
    it('Check input field without error and type password', () => {
        const label = 'label input';
        const name = 'input name';
        const placeHolder = 'placeholder';
        const value = 'the input val';
        const type = 'password';
        const onChange = sinon.spy();
        const wrapper = shallow(<TextInput
            name={name}
            label={label}
            placeholder={placeHolder}
            value={value}
            type={type}
            onChange={onChange}/>);
        expectChai(wrapper.find('.input-wrap-label').text()).to.equal(label);
        expectChai(wrapper.find('input').prop('type')).to.equal(type);
        expectChai(wrapper.find('input').prop('className')).to.equal("form-control");
        expectChai(wrapper.find('.alert-danger-text').length).to.equal(0);
    });
    it('Check input field without error', () => {
        const label = 'label input';
        const name = 'input name';
        const placeHolder = 'placeholder';
        const value = 'the input val';
        const error = 'This is error message';
        const onChange = sinon.spy();
        const wrapper = shallow(<TextInput
            name={name}
            label={label}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            error={error}/>);
        expectChai(wrapper.find('.input-wrap-label').text()).to.equal(label);
        expectChai(wrapper.find('.alert-danger-text').length).to.equal(1);
        expectChai(wrapper.find('.alert-danger-text').childAt(0).text()).to.equal(error);
    });
});