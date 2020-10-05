import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar"
import MenuBar from '../MenuBar'

import * as S from './styled' //* para selecionar tudo

import GlobalStyles from "../../styles/global"


const Layout = ({ children }) => {
 
  return (
      <S.LayoutWrapper>
        <GlobalStyles/>
        <aside>
          <Sidebar/>
        </aside>
        <S.LayoutMain>{children}</S.LayoutMain>
        <MenuBar/>
      </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
