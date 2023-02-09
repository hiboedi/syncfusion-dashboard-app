import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";

const key =
  "Mgo+DSMBaFt/QHRqVVhkVVpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF5jS35bdkxjWX9WcHJTRQ==;Mgo+DSMBPh8sVXJ0S0J+XE9Af1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdEVrWXZecHRdR2ZaUw==;ORg4AjUWIQA/Gnt2VVhkQlFaclZJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjUX9XcHRVTmJaUU0=;MTA4OTUxNUAzMjMwMmUzNDJlMzBCVC9Xa0ZWRm5YdkJrMWxpeVZVY0pTcFphVDNEbE96bi9DcGhhaS9ITjhnPQ==;MTA4OTUxNkAzMjMwMmUzNDJlMzBsYSt1L05uelYwUnVQNXFFY1d4N3ErWENrMnp3c2YwUVZWc0orU1Z0ZU5JPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtLVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdUVhWXdeeXRVRmhVU0V3;MTA4OTUxOEAzMjMwMmUzNDJlMzBLbXRKY0g3MDVuMGZpSXovdi9SbHcyTU5IRVNydkkxUmNNbzlCd053SUZJPQ==;MTA4OTUxOUAzMjMwMmUzNDJlMzBMcHB6MEh2dFZ0VnR0RXNqb3pXUkpVSE9XVGJwNU9ma1hWTFZrZWdiS3ljPQ==;Mgo+DSMBMAY9C3t2VVhkQlFaclZJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkdjUX9XcHRVT2ZZUE0=;MTA4OTUyMUAzMjMwMmUzNDJlMzBVS2ZacjNqM242SjczOGVWb3NJM0ZoWTV6VXZ5azRTK3pySmp2V29pQWRZPQ==;MTA4OTUyMkAzMjMwMmUzNDJlMzBHSnVtRUM5c05XTlNtTWZPaDFYR2lUTE9JT2piYVBpR3BiQnp5VGlMdis4PQ==;MTA4OTUyM0AzMjMwMmUzNDJlMzBLbXRKY0g3MDVuMGZpSXovdi9SbHcyTU5IRVNydkkxUmNNbzlCd053SUZJPQ==";

registerLicense(key);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
