// This file wants a reference to the library as a whole, which seems to be the problem that
// creates the internal namespace

import * as libRef from './libRef';

export interface Problem {
	foo: libRef.F;
	doAThing:(ref:typeof libRef) => void;
}