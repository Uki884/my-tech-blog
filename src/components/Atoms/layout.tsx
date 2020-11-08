import React, { ReactNode } from 'react';
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"
import styled from "styled-components"

const _Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  font-size: 14px;
`
const _Content = styled.main`
  margin-top: 60px;
`

const _HeaderTitle = styled.h1<{scale: string}>`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
  transform: ${props => props.scale };
  position: fixed;
  z-index: 999999;
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
        <Link to={`/`}> {title} </Link>
      </_HeaderTitle>
      <_Content>{children}</_Content>
      <_Footer>
        <div>© {new Date().getFullYear()} Yuki Hayashi All rights reserved.</div>
      </_Footer>
    </div>
  )
}

export default Layout
