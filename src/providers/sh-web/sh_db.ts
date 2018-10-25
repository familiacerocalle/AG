import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

@Injectable()
export class ShDbStorage {
    constructor(private storage: Storage) {

    }

    public shGet(tableName: string) {
        return new Promise(resolve => {
            this.storage.get(tableName).then(data => {
                resolve(data);
            });
        });
    }

    public shPost(tableName: string, data: any) {
        return new Promise(resolve => {
            this.storage.set(tableName, data).then(() => {
                resolve(true);
            });
        });
    }
}