import React, { ReactNode } from 'react';
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const _Footer = styled.footer`
  position: absolute;
  bottom: 20px;
`

const _HeaderTitle = styled.h1<{scale: string}>`
  font-size: 40px;
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  transform: ${props => props.scale };
`

const Layout = ({ location, title, children }: { location: Location, title: string, children: ReactNode }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <_HeaderTitle scale={location.pathname === rootPath ? 'scale(1)' : 'scale(1)'}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </_HeaderTitle>
      <main>{children}</main>
      <_Footer>
        <div>© {new Date().getFullYear()}Yuki Hayashi All rights reserved.</div>
      </_Footer>
    </div>
  )
}

export default Layout
