import { formatNumber } from './utils';

describe('test formatNumber in utils', () => {
    it('first case', () => {
        const test1 = 20123123123
        expect(formatNumber(test1)).toEqual('20,123,123,123');
    });
    it('second case', () => {
        const test2 = 200000
        expect(formatNumber(test2)).toEqual('200,000');
    });
});