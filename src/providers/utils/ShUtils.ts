/**
 * Created by KARTIKA on 7/27/2017.
 */

export class ShUtils {
    public static ascendingOrder: boolean = true;
    public static staticSelectedStockColumn: string[] = ['product_name', 'branch_product_code', 'branch_product_quantity', 'branch_product_purchase_price', 'branch_product_gst', 'branch_product_selling_price'];
    public static staticSelectedBillColumn: string[] = ['bill_date', 'bill_number', 'bill_name', 'bill_final_amount'];
    selectedStockColumn: string[] = ['product_name', 'branch_product_code', 'branch_product_quantity', 'branch_product_purchase_price', 'branch_product_gst', 'branch_product_selling_price'];
    selectedBillColumn: string[] = ['bill_date', 'bill_number', 'bill_name', 'bill_final_amount'];
    selectedPaymentColumn: string[] = [];
    selectedAccountColumn: string[] = [];
    protected gstValues: string[] = ["0", "3", "5", "12", "18", "28"];
    protected qtyUnit: string[] = ["pc", "kg", "gm", "m", "cm", "inch", "dozen", "l", "ml", "SqFt", "SqMt", "SqInch"];

    constructor() {
        this.selectedStockColumn = ShUtils.staticSelectedStockColumn;
        this.selectedBillColumn = ShUtils.staticSelectedBillColumn;
    }

    public static insertServerResponseData(serverResponse, localDataList) {
        if (serverResponse != null) {
            if (localDataList == null) {
                localDataList = [];
            }
            localDataList = localDataList.filter((user: any) => {
                let found: boolean = false;
                for (let serverUser of serverResponse) {
                    if (serverUser.id == user.id) {
                        found = true;
                    }
                }
                return !found;
            });
            for (let serverUser of serverResponse) {
                localDataList.push(serverUser);
            }
            return localDataList;
        } else {
            return [];
        }
    }

    public static round2Dedimal(num) {
        num = Math.round(num * 100) / 100;

        return num.toFixed(2);
        // return Number(Math.round(value + 1e2) + 1e-2);
        // Number(Math.round(1.005+'e2')+'e-2');
    }

    public static inWords(num) {

        let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        var str = '';
        str += (parseInt(n[1]) != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (parseInt(n[2]) != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (parseInt(n[3]) != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (parseInt(n[4]) != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        console.log(" beforel" + str);

        str += (parseInt(n[5]) != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
        console.log(" in words sh util" + str);
        return str;
    }

    public multiply(num1, num2) {
        return ShUtils.round2Dedimal(num1 * num2);
    }

    showStockColumn(columnName: string) {
        if (this.selectedStockColumn != null) {
            return this.selectedStockColumn.indexOf(columnName) > -1;
        } else {
            return false;
        }
    }

    showBillColumn(columnName: string) {
        if (this.selectedBillColumn != null) {
            return this.selectedBillColumn.indexOf(columnName) > -1;
        } else {
            return false;
        }
    }

    showPaymentColumn(columnName: string) {
        if (this.selectedPaymentColumn != null) {
            return this.selectedPaymentColumn.indexOf(columnName) > -1;
        } else {
            return false;
        }
    }

    showAccountColumn(columnName: string) {
        if (this.selectedAccountColumn != null) {
            return this.selectedAccountColumn.indexOf(columnName) > -1;
        } else {
            return false;
        }
    }

    getSelectedColor(selectedBillType) {
        switch (selectedBillType) {
            case "SALES_BILL":
                return "#32db64";
            case "PURCHASE_BILL":
                return "#488aff";
            case "EXPENSE_BILL":
                return "#FFFF66";
            default:
                return "#ff0000";
        }
    }


    getEventColor(event: string) {
        switch (event) {
            case 'आयोजन':
                return '#FFB9B9';
            case 'जानकारी':
                return '#B9FFB9';
            case 'नियम':
                return '#FFFFD5';
        }
    }


    getSelectedColorCompare(selectedBillType, myColor) {
        if (myColor == selectedBillType) {

            return this.getSelectedColor(selectedBillType);
        }
        else {
            return "white";
        }
    }

    getRowStripColor(shObjectList, shObject) {
        if (shObjectList.indexOf(shObject) % 2 == 0) {
            return "#aaa8";
        } else {
            return "transparent";
        }
    }

    getSelectedColorTheme(selectedBillType) {
        switch (selectedBillType) {
            case "SALES_BILL":
                return "secondary";
            case "PURCHASE_BILL":
                return "pr" +
                    "imary";
            case "EXPENSE_BILL":
                return "yellow";
        }

    }

    getSelectedColorThemeCompare(selectedBillType, myColor) {
        if (myColor == selectedBillType) {
            return this.getSelectedColorTheme(selectedBillType);

        }
        else {
            return "light";
        }
    }

    getSerialNumber(shObjectList, shObject) {
        if (shObjectList != null && shObject != null) {
            return (shObjectList.indexOf(shObject) + 1);
        } else {
            return 0;
        }
    }

    getCount(objectList: any) {
        if (objectList != null) {
            return objectList.length;
        } else {
            return 0;
        }
    }

    enterSplitter(fullString: string) {
        if (fullString != null) {
            return fullString.split('\n');
        } else {
            return [];
        }
    }

    public static saveUnique(objectList, object) {
        let found: boolean = false;
        for (let task of objectList) {
            if (object.id == task.id) {
                found = true;
            }
        }
        if (!found) {
            objectList.unshift(object);
        }
    }


    setListFocused(focusedObject: any, listObject: any) {
        if (focusedObject != null && listObject != null) {
            if (focusedObject.id == listObject.id) {
                return '5px solid #245A8C';
            }
            else {
                return '5px solid #fff';

            }
        }
    }

    sort(array: Array<any>, key: any, stringType: boolean): Array<any> {
        ShUtils.ascendingOrder = !ShUtils.ascendingOrder;
        if (array != null) {
            array.sort((a: any, b: any) => {
                if (ShUtils.ascendingOrder && stringType) {
                    if (a[key] < b[key]) {
                        return -1;
                    } else if (a[key] > b[key]) {
                        return 1;
                    } else {
                        return 0;
                    }
                } else if (!ShUtils.ascendingOrder && stringType) {
                    if (a[key] > b[key]) {
                        return -1;
                    } else if (a[key] < b[key]) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                else if (ShUtils.ascendingOrder && !stringType) {
                    return a[key] - b[key]
                } else if (!ShUtils.ascendingOrder && !stringType) {
                    return b[key] - a[key]
                }
            });
        }
        let message: string = "";
        if (ShUtils.ascendingOrder) {
            message = message + "ascending sorted";
        } else {
            message = message + "descending sorted";
        }
        // this.toastCtrl.presentToastTiming(message, 2000);
        return array;
    }

}
