import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
    let container
    let runningTotal
    let buttonEquals

    beforeEach(() => {
        container = render(<Calculator/>)
        runningTotal = container.getByTestId('running-total')
        buttonEquals = container.getByTestId('operator-equals')
        
    })

    it('should change running total on number enter', () => {
        const button4 = container.getByTestId('number4');
        fireEvent.click(button4);
        expect(runningTotal.textContent).toEqual('4');
    })

    it('should be able to add numbers', () => {
        const button1 = container.getByTestId('number1')
        fireEvent.click(button1)
        const buttonAdd = container.getByTestId('operator-add')
        fireEvent.click(buttonAdd)
        const button4 = container.getByTestId('number4')
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)
        expect(runningTotal.textContent).toEqual('5')
    })

    it('should be able to subtract numbers', () => {
        const button7 = container.getByTestId('number7')
        fireEvent.click(button7)
        const buttonSubtract = container.getByTestId('operator-subtract')
        fireEvent.click(buttonSubtract)
        const button4 = container.getByTestId('number4')
        fireEvent.click(button4)
        fireEvent.click(buttonEquals)
        expect(runningTotal.textContent).toEqual('3')
    })

    it('should be able to multiply numbers', () => {
        const button3 = container.getByTestId('number3')
        fireEvent.click(button3)
        const buttonMultiply = container.getByTestId('operator-multiply')
        fireEvent.click(buttonMultiply)
        const button5 = container.getByTestId('number5')
        fireEvent.click(button5)
        fireEvent.click(buttonEquals)
        expect(runningTotal.textContent).toEqual('15')
    })

    it('should be able to divide numbers', () => {
        const button2 = container.getByTestId('number2')
        fireEvent.click(button2)
        const button1 = container.getByTestId('number1')
        fireEvent.click(button1)
        const buttonDivide = container.getByTestId('operator-divide')
        fireEvent.click(buttonDivide)
        const button7 = container.getByTestId('number7')
        fireEvent.click(button7)
        fireEvent.click(buttonEquals)
        expect(runningTotal.textContent).toEqual('3')
    })

    it('should be able to concatenate multiple number button clicks', () => {
        const button2 = container.getByTestId('number2')
        fireEvent.click(button2)
        const button1 = container.getByTestId('number1')
        fireEvent.click(button1)
        fireEvent.click(button2)
        expect(runningTotal.textContent).toEqual('212')
    })

    it('should be able to chain multiple operations together', () => {
        const button1 = container.getByTestId('number1')
        fireEvent.click(button1)
        const buttonAdd = container.getByTestId('operator-add')
        fireEvent.click(buttonAdd)
        const button4 = container.getByTestId('number4')
        fireEvent.click(button4)
        const buttonMultiply = container.getByTestId('operator-multiply')
        fireEvent.click(buttonMultiply)
        const button5 = container.getByTestId('number5')
        fireEvent.click(button5)
        fireEvent.click(buttonEquals)
        expect(runningTotal.textContent).toEqual('25')
    })


    it('should be able to clear the running total without affecting the calculation', () => {
        const button1 = container.getByTestId('number1')
        fireEvent.click(button1)
        const buttonAdd = container.getByTestId('operator-add')
        fireEvent.click(buttonAdd)
        const button4 = container.getByTestId('number4')
        fireEvent.click(button4)
        const buttonClear = container.getByTestId('clear')
        fireEvent.click(buttonClear)
        fireEvent.click(buttonEquals)
        expect(runningTotal.textContent).toEqual('1')
    })

})
