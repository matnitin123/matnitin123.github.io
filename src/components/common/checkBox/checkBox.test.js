import {createRenderer} from 'react-addons-test-utils';
import chai from 'chai';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import {shallow} from 'enzyme';
import CheckBox from './checkBox';
import _ from 'lodash';
import sinon from 'sinon';
const expect = chai.expect;

describe("Checkbox component", () => {
    it("Render Checkbox component without styleClass", () => {

        const label = "This is checkbox label";
        const checked = true;
        const checkedChange = function () {
            return;
        };
        const wrapper = shallow(<CheckBox
            label={label}
            checked={checked}
            onCheck={checkedChange}
        />);
        expect(wrapper.find('div').hasClass("checkbox-container")).to.equal(true);
        expect(wrapper.find('div').childAt(0).prop("label")).to.equal(label);
        expect(wrapper.find('div').childAt(0).prop("checked")).to.equal(checked);
        expect(wrapper.find('div').childAt(0).prop("onCheck")).to.equal(checkedChange);
    });

    it("Render Checkbox component with styleClass", () => {

        const label = "This is checkbox label";
        const checked = false;
        const checkedChange = function () {
            return;
        };
        const styleClass = 'CheckBoxWrapperClass';
        const wrapper = shallow(<CheckBox
            label={label}
            checked={checked}
            onCheck={checkedChange}
            styleClass={styleClass}

        />);
        expect(wrapper.find('div').hasClass("checkbox-container")).to.equal(true);
        expect(wrapper.find('div').hasClass(styleClass)).to.equal(true);
        expect(wrapper.find('div').childAt(0).prop("label")).to.equal(label);
        expect(wrapper.find('div').childAt(0).prop("checked")).to.equal(checked);
        expect(wrapper.find('div').childAt(0).prop("onCheck")).to.equal(checkedChange);
    });
});