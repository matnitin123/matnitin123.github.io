import {createRenderer} from 'react-addons-test-utils';
import chai from 'chai';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';
import _ from 'lodash';
import sinon from 'sinon';
const expect = chai.expect;

describe('Ui components Button ', () => {
    it('Simple rendering try-button2', () => {
        const buttonText = 'Click text';
        const type = "try-button2";
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Button
                                type={type}
                                text={buttonText}
                                onClick={onButtonClick}
                                />);

        expect(wrapper.text()).to.equal(buttonText);
        expect(wrapper.hasClass('title')).to.equal(true);
        expect(wrapper.hasClass(type)).to.equal(true);
        expect(wrapper.hasClass('disable-button')).to.equal(false);
        expect(onButtonClick.calledOnce).to.equal(false);
    });
    it('Simple rendering disable-btn', () => {
        const buttonText = 'Click text';
        const type = "try-button2";
        const disable = true;
        const onButtonClick = sinon.spy();
        const wrapper = shallow(<Button
            type={type}
            text={buttonText}
            onClick={onButtonClick}
            disable={disable}
        />);

        expect(wrapper.text()).to.equal(buttonText);
        expect(wrapper.hasClass('title')).to.equal(true);
        expect(wrapper.hasClass(type)).to.equal(false);
        expect(wrapper.hasClass('disable-button')).to.equal(true);
        expect(onButtonClick.calledOnce).to.equal(false);
    }); /// fonClass
    it('Simple rendering set fonClass', () => {
        const buttonText = 'Click text';
        const type = "try-button2";
        const onButtonClick = sinon.spy();
        const fonClass = 'subtitle';
        const wrapper = shallow(<Button
            type={type}
            text={buttonText}
            onClick={onButtonClick}
            fonClass={fonClass}
        />);

        expect(wrapper.text()).to.equal(buttonText);
        expect(wrapper.hasClass('title')).to.equal(false);
        expect(wrapper.hasClass(fonClass)).to.equal(true);
        expect(wrapper.hasClass(type)).to.equal(true);
        expect(wrapper.hasClass('disable-button')).to.equal(false);
        expect(onButtonClick.calledOnce).to.equal(false);
    });
    it('Simple rendering onClick button', () => {
        const buttonText = 'Click text';
        const onButtonClick = sinon.spy();
        const type = "try-button2";
        const wrapper = shallow(<Button
            type={type}
            text={buttonText}
            onClick={onButtonClick}
        />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick.calledOnce).to.equal(true);
        // initial rendering
        //renderer.render(<Button/>);
        //let actualElement = renderer.getRenderOutput();

        expect(wrapper.text()).to.equal(buttonText);
        expect(wrapper.hasClass('title')).to.equal(true);
        expect(wrapper.hasClass(type)).to.equal(true);
    });
    it('Simple rendering with loading = false', () => {
        const buttonText = 'Click text';
        const onButtonClick = sinon.spy();
        const type = "try-button2";
        const loading = false;
        const wrapper = shallow(<Button
            type={type}
            text={buttonText}
            onClick={onButtonClick}
            loading={loading}
        />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick.calledOnce).to.equal(true);
        // initial rendering
        //renderer.render(<Button/>);
        //let actualElement = renderer.getRenderOutput();

        expect(wrapper.text()).to.equal(buttonText);
        expect(wrapper.hasClass('title')).to.equal(true);
        expect(wrapper.hasClass(type)).to.equal(true);
    });
    it('Simple rendering with loading = false', () => {
        const buttonText = 'Click text';
        const onButtonClick = sinon.spy();
        const type = "try-button2";
        const loading = true;
        const wrapper = shallow(<Button
            type={type}
            text={buttonText}
            onClick={onButtonClick}
            loading={loading}
        />);
        expect(wrapper.html()).to.equal('<div class="button_simulate_loader"><div class="loader"></div></div>');
    });
});