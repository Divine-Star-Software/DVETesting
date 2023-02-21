import { LocationData } from "voxelspaces";


type DVELoadMessage = {
 type: "load-column";
 location: LocationData;
};

type DVELoadRegionHeaderMessage = {
 type: "load-region-header";
 location: LocationData;
};
type DVESaveMessagee = {
 type: "save-column";
 location: LocationData;
 buffer: ArrayBuffer;
};
type DVEColumnExistsMessage = {
 type: "column-exists";
 location: LocationData;
};
type DVEColumnTimestampMessage = {
 type: "column-timestamp";
 location: LocationData;
};

type DVESetPathMessagee = {
 type: "set-path";
 id: string;
};

export type DVEDMessages =
 | DVELoadMessage
 |DVELoadRegionHeaderMessage
 | DVESaveMessagee
 | DVESetPathMessagee
 | DVEColumnExistsMessage
 | DVEColumnTimestampMessage;
