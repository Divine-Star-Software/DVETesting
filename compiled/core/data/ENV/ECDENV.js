export const ECDENV = {
    data: {},
    async $INIT(url = ".ECD_ENV") {
        const envDataResponse = await fetch(url);
        const envData = await envDataResponse.json();
        this.data = envData;
    },
};
