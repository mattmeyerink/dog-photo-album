import { waitForAsync } from '@angular/core/testing';
import UtilityFunctions from './utils';

describe('UtilsFunctions', () => {
    it('should animate right and delay', waitForAsync(async () => {
        const element = document.createElement('div');

        UtilityFunctions.animateRight(element);
        expect(element.style.left).not.toEqual('100px');

        element.style.left = '0px';

        UtilityFunctions.animateRight(element);
        await UtilityFunctions.delay(1500);
        expect(element.style.left).toEqual('100px');
    }));

    it('should remove duplicates from array', () => {
        const testArray1 = [1, 4, 6, 3, 3, 7, 7, 7, 1, 9, 5];
        expect(testArray1.length).toEqual(11);
        const updatedTestArray1 = UtilityFunctions.removeDuplicates(testArray1);
        expect(updatedTestArray1.length).toEqual(7);

        const testArray2 = ['Hello', 'hello', 'world', 'Hello', '2', '2', 'Two'];
        expect(testArray2.length).toEqual(7);
        const updatedTestArray2 = UtilityFunctions.removeDuplicates(testArray2);
        expect(updatedTestArray2.length).toEqual(5);

        const testArray3 = ['1', '1', 1, 1, 2, 'Two', 'Two', 'Hello'];
        expect(testArray3.length).toEqual(8);
        const updatedTestArray3 = UtilityFunctions.removeDuplicates(testArray3);
        expect(updatedTestArray3.length).toEqual(5);
    });
});