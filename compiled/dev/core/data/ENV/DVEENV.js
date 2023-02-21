export const DVEDENV = {
    data: {},
    async $INIT(url = ".DVE_ENV") {
        const envDataResponse = await fetch(url);
        const envData = await envDataResponse.json();
        this.data = envData;
    },
};
