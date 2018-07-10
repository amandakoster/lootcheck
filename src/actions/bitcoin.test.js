// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-think';
import fetchMock from 'fetch';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

//configureMockStore allows middleware, add middleware thunk
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} })

