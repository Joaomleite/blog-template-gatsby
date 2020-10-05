import React from 'react'
import { useStaticQuery , graphql } from 'gatsby'


import Avatar from '../Avatar'
import * as S from './styled'



const Profile = () => {

    const {
        site: {
            siteMetadata: {title, position, description},
        }, 
    } = useStaticQuery(graphql`

        query MyQuery {
            site {
            siteMetadata{
                author
                description
                title
                position
            }
            }
        }
    `)

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar/>      
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>
                        {position}
                    </S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>    
        </S.ProfileWrapper>
    )


}


/* USANDO StaticQuery
const Profile = () => (
    <StaticQuery 
        query={graphql`

        query MyQuery {
            site {
              siteMetadata{
                author
                description
                title
                position
              }
            }
          }
          
        `}
        render={({site: {siteMetadata: {title, position, description}}}) => (
        <div className="profile-wrapper">
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </div>
        )}
    />
    
)
*/
export default Profile