import React from 'react'


import Icons from './icons'
import Links from './content'

import * as S from './styled'

const SocialLinks = () => (

    <S.SocialLinksWrapper>
        <S.SocialLinksList>
            {Links.map((link, i) => {
            const Icon = Icons[link.label]
            
            return (
                <S.SocialLinksItem key={i}>
                    <S.SocialLinksLinks 
                        href={link.url} 
                        title={link.label} 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <S.IconWrapper>
                        <Icon />
                    </S.IconWrapper>
                    </S.SocialLinksLinks>               
                </S.SocialLinksItem>
            )
            })}             
        </S.SocialLinksList>
    </S.SocialLinksWrapper>
)

export default SocialLinks