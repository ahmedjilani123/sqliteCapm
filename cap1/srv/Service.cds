using { cap1.db as db} from '../db/Schema';

service MyService {

    entity User as projection on db.User;
    function Getdata(ID:String,Name:String) returns array of User;

}