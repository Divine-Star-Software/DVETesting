import { MainWorldGen } from "./Dimensions/Main/MainWorldGen.js";
export const WorldGenerator = {
    generate(dimension, x, y, z, data) {
        if (dimension == "main") {
            //  TestWorldGen.generate(dimension, x, y, z, data);
            MainWorldGen.generate(dimension, x, y, z, data);
        }
    },
};
