import * as React from "react"
import styled from "styled-components"

const _Card = styled.div`
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  color: #212121;
  width: 320px;
  text-decoration: none;
  margin: 8px;
  cursor: pointer;
  height: 350px;
  background: #272727;
  border-radius: 4px;
`

const BaseCard = ({ children }: any) => {
  return <_Card>{children}</_Card>
}

export default BaseCard
