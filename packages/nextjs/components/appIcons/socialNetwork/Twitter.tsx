import React from "react";
import { Link } from "rebass";
import { Twitter as TwitterLogo } from "../Twitter";

export const Twitter = (props) => (
  <Link href="https://www.linkedin.com/company/dashboard/" aria-label="twitter" rel="noreferrer" target="_blank">
    <TwitterLogo {...props} />
  </Link>
);
