/**
 * Created by Nikhil on 2017-05-10.
 */
import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";
import {UserLogin} from "../models/UserLogin";
import "rxjs/add/operator/map";
import {ShDateUtil} from "../utils/ShDateUtil";

@Injectable()
export class ShDbStorage {

    constructor(private storage: Storage) {

    }

    static getNewObject(tableArray: any, tableObject: any, userLogin: UserLogin) {
        let userId: number = parseInt((userLogin.user_login_user.id + "").substring(((userLogin.user_login_user.id + "").lastIndexOf(".") + 1), (userLogin.user_login_user.id + "").length));
        let newId: number = 0.0000000000;
        for (let oldObject of tableArray) {
            let savedIdInt: number = Math.floor(oldObject.id);
            if (savedIdInt == userId) {
                if (oldObject.id > newId) {
                    newId = oldObject.id;
                }
            }
        }
        if (newId == 0.0000000000) {
            newId = (userId) + 0.0000000001;
        } else {
            newId = Math.round((newId + 0.0000000001) * 1e12) / 1e12;


            if ((newId + "").substring((newId + "").indexOf("."), (newId + "").length).length > 11) {
                newId = parseFloat(Math.floor(newId) + (newId + "").substring((newId + "").indexOf("."), (newId + "").length).substring(0, 11));
            }

        }
        console.log("final newId" + newId);
        tableObject.id = newId;
        tableObject.active = 1;
        tableObject.first_update = ShDateUtil.convertDisplayToDb(new Date);
        tableObject.last_update = 0;
    }

    shSaveInTable(userLogin: UserLogin, tableName: string, tableObject: any) {
        return new Promise(resolve => {
            let newObjectList = [];
            newObjectList.push(tableObject);
            this.shSaveRowsInTable(userLogin, tableName, newObjectList).then(() => {
                resolve();
            });
        });
    }

    shSaveRowsInTable(userLogin: UserLogin, tableName: string, tableNewObjectList: any) {
        return new Promise(resolve => {
            this.storage.get(tableName).then((savedList: any) => {
                if (savedList == null) {
                    savedList = [];
                }
                for (let tableObject of tableNewObjectList) {
                    if (tableObject.id == null || tableObject.id == 0) {
                        ShDbStorage.getNewObject(savedList, tableObject, userLogin);
                        savedList.unshift(this.convertJsonToRow(tableName, tableObject));
                    } else {
                        tableObject.last_update = 0;
                        for (let savedObject of savedList) {
                            if (savedObject.id == tableObject.id) {
                                savedList.splice(savedObject);
                            }
                        }
                        savedList.unshift(this.convertJsonToRow(tableName, tableObject));
                    }
                }
                this.storage.set(tableName, savedList).then(() => {
                    resolve();
                });
            });
        });
    }

    removeInList(tableName: string, tableObject: any) {
        return new Promise(resolve => {
            this.storage.get(tableName).then((tableArray: any) => {
                for (let saveObject of tableArray) {
                    if (saveObject.id == tableObject.id) {
                        saveObject.active = 0;
                        saveObject.last_update = 0;
                    }
                }
                this.storage.set(tableName, tableArray).then(() => {
                    resolve();
                });
            });
        });
    }

    removeListInList(tableName: string, tableObjectList: any) {
        return new Promise(resolve => {
            this.storage.get(tableName).then((tableArray: any) => {
                for (let savedObject of tableArray) {
                    for (let tableObject of tableObjectList) {
                        if (savedObject.id == tableObject.id) {
                            savedObject.active = 0;
                            savedObject.last_update = 0;
                        }
                    }
                }
                this.storage.set(tableName, tableArray).then(() => {
                    resolve();
                });
            });
        });
    }

    shGetTable(tableName: string) {
        return new Promise(resolve => {
            this.storage.get(tableName).then((data: any) => {
                if (data) {
                    resolve(data.filter((singleData: any) => {
                        return singleData.active == 1;
                    }));
                } else {
                    resolve([]);
                }
            });
        });
    }

    shGet(tableName: string) {
        return new Promise(resolve => {
            this.storage.get(tableName).then((data: any) => {
                resolve(data);
            });
        });
    }

    shPost(tableName: string, data: any) {
        return new Promise(resolve => {
            this.storage.set(tableName, data).then(() => {
                resolve();
            });
        });
    }

    convertJsonToRow(tableName, newObject) {
        switch (tableName) {
            default:
                return newObject;
        }
    }
}
