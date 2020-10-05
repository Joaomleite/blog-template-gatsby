import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({url, title}) => {
  const completeUrl = `https://joaomarcos.com.br${url}`

  return(
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="joaomarcos-com-br"
        identifier={completeUrl}
        title={title}
        url={completeUrl} />
    </S.CommentsWrapper>
  )
}

Comments.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Comments