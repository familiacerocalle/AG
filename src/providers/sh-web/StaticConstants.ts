export class StaticConstantsService {

    public static auth: string = "0137e33939bede8bbaae6b055a850609";
    public static buildType: string = "Browser";

    static getServerAddress() {
        return "https://gryphus-web-dev.herokuapp.com/api/v1/";
    }
}
