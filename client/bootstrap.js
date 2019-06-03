import { store } from '@things-factory/shell'
import publisherBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    publisherBase
  })
}
