import React from 'react'
import Profile from '../Profile/index'
import SocialLinks from '../SocialLinks/index'
import MenuLinks from '../MenuLink'

import * as S from './styled'

const Sidebar = () => (

    <S.SidebarWrapper>
        <Profile/>
        <SocialLinks/>
        <MenuLinks />
    </S.SidebarWrapper>
    
)

export default Sidebar