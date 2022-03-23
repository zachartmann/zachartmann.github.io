import { pageTitleToUrl } from "../utils";
import React from "react";

const NavPage = ({ page }) => {
  const href = `/${pageTitleToUrl(page)}`
  return (
    <a href={href}>{page}</a>
  )
}

export default NavPage;