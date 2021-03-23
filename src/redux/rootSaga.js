import { all, call } from 'redux-saga/effects'
import userSagas from './User/user.saga'
import productsSagas from './Product/products.sagas'

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
  ])
}