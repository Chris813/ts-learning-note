import { Collection } from './../../.history/web/src/models/Collection_20230813164754';
import {User} from './models/User'

const collection=User.buildUserCollection();
collection.on('change',()=>{
    console.log(collection)
})
collection.fetch();
