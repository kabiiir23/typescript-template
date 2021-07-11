import test from 'ava';

import { getSum } from '.';

test('get sum', (t) => {
  t.is(getSum({ x: 1, y: 3 }), 4);
});
