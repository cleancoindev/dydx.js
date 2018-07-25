import BigNumber from 'bignumber.js';

export const ADDRESSES = {
  ZERO: '0x0000000000000000000000000000000000000000',
  ONE:  '0x0000000000000000000000000000000000000001',
};

export const BIGNUMBERS = {
  ZERO: new BigNumber(0),
  ONE_DAY_IN_SECONDS: new BigNumber(60 * 60 * 24),
  ONE_YEAR_IN_SECONDS: new BigNumber(60 * 60 * 24 * 365),
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    ), // 2**256-1
};

export const BYTES32 = {
  ZERO: '0x0000000000000000000000000000000000000000000000000000000000000000'.valueOf(),
};
