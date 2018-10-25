/**
 * Created by dell on 1/30/2017.
 */
export class ShDateUtil {
    static convertDbToDisplay(dbDate: number) {
        let displayDate: Date = new Date;

        displayDate.setFullYear(parseInt((dbDate + "").substr(0, 4)), parseInt((dbDate + "").substr(3, 2), parseInt((dbDate + "").substr(5, 2))));
        displayDate.setHours(parseInt((dbDate + "").substr(7, 2)), parseInt((dbDate + "").substr(9, 2), parseInt((dbDate + "").substr(11, 2))));

        return displayDate;
    }

    static convertDbToDisplayString(dbDate: number) {
        let displayString: string = dbDate + "";
        let displayDate: Date = new Date;

        displayDate.setFullYear(parseInt((dbDate + "").substr(0, 4)), parseInt((dbDate + "").substr(3, 2), parseInt((dbDate + "").substr(5, 2))));
        displayDate.setHours(parseInt((dbDate + "").substr(7, 2)), parseInt((dbDate + "").substr(9, 2), parseInt((dbDate + "").substr(11, 2))));

        displayString = displayString.substr(0, 4) + "-" + displayString.substr(4, 2) + "-" + displayString.substr(6, 2);
        return displayString;
    }

    static convertDbToDisplayString2(dbDate: number) {

        let displayDate: string = (dbDate + "").substr(6, 2);

        switch ((dbDate + "").substr(4, 2)) {
            case "01":
                displayDate += " Jan ";
                break;
            case "02":
                displayDate += " Feb ";
                break;
            case "03":
                displayDate += " Mar ";
                break;
            case "04":
                displayDate += " Apr ";
                break;
            case "05":
                displayDate += " May ";
                break;
            case "06":
                displayDate += " Jun ";
                break;
            case "07":
                displayDate += " Jul ";
                break;
            case "08":
                displayDate += " Aug ";
                break;
            case "09":
                displayDate += " Sep ";
                break;
            case "10":
                displayDate += " Oct ";
                break;
            case "11":
                displayDate += " Nov ";
                break;
            case "12":
                displayDate += " Dec ";
                break;
            default:
            //console.log("displayDate : " + (dbDate + "").substr(3, 2));

        }

        // displayDate += (dbDate + "").substr(0, 4);


        return displayDate;
    }

    static convertDisplayStringToDb(displayDate: string) {
        let dbDate: Date = new Date(displayDate);
        return this.convertDisplayToDb(dbDate);
    }

    static convertDisplayToDb(displayDate: Date) {
        let stringDate: string = "" + displayDate.getFullYear();

        if ((displayDate.getMonth() + 1) < 10) {
            stringDate += "0";
        }
        stringDate += (displayDate.getMonth() + 1);

        if (displayDate.getDate() < 10) {
            stringDate += "0";
        }
        stringDate += displayDate.getDate();

        if
        (displayDate.getHours() < 10) {
            stringDate += "0";
        }
        stringDate += displayDate.getHours();

        if (displayDate.getMinutes() < 10) {
            stringDate += "0";
        }
        stringDate += displayDate.getMinutes();

        if (displayDate.getSeconds() < 10) {
            stringDate += "0";
        }
        stringDate += displayDate.getSeconds();

        return parseInt(stringDate);
    }

    static getCurrentDate(displayDate: Date) {
        let stringDate: string = displayDate.getFullYear() + "-";

        if (displayDate.getMonth() < 10) {
            stringDate += "0";
        }
        stringDate += (displayDate.getMonth() + 1) + "-";

        if (displayDate.getDate() < 10) {
            stringDate += "0";
        }
        stringDate += displayDate.getDate();

        return stringDate;
    }


    static getMonthBackDate(displayDate: Date, monthToReduce: number) {
        displayDate.setMonth(displayDate.getMonth() - 1);

        return this.getCurrentDate(displayDate);
    }

    static convertDbToFbString(dbDate: number) {
        if ((dbDate + 1000000) < this.convertDisplayToDb(new Date)) {
            return this.convertDbToDisplayString2(dbDate);
        }
        if ((dbDate + 10000) < this.convertDisplayToDb(new Date)) {
            return "few hours ago";
        }
        if ((dbDate + 100) < this.convertDisplayToDb(new Date)) {
            return "few min ago";
        }
        return "few sec ago";
    }


    static convertDbToTime(dbDate: number): string {
        let displayTime = "" + (dbDate + "").substr(8, 2) + " : ";
        displayTime = displayTime + (dbDate + "").substr(10, 2) + " : ";
        displayTime = displayTime + (dbDate + "").substr(12, 2);
        return displayTime;
    }
}
