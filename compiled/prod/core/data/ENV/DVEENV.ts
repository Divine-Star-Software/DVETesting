import type { DVE_ENV_DATA } from "@core/types/ENV/ENV.types";
export const DVEDENV = {
  data: <DVE_ENV_DATA>{},
  async $INIT(url = ".DVE_ENV") {
    const envDataResponse = await fetch(url);
    const envData = await envDataResponse.json();
    this.data = envData;
  },
};
