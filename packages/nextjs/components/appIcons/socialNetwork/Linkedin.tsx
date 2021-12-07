import React from "react";
import { Link } from "rebass";
import { Linkedin as LinkedinLogo } from "../Linkedin";

export const Linkedin = (props) => (
  <Link href="https://www.linkedin.com/company/dashboard/" aria-label="linkedin" rel="noreferrer" target="_blank">
    <LinkedinLogo {...props} />
  </Link>
);
