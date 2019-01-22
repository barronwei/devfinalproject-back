const Comment = require('../../models/Comment')

const addCom = async (obj, { input }, context) => {
  
  if (!context.user) {
    return {
      error: {
        message: 'User not logged in',
      },
    }
  }

  const comment = await Comment.query()
    .then(res => res[0])
  //***********//
  const res = await comment.insert({ input })

  if (!res) {
    throw new Error('Could not add comment')
  }

  return {
    res,
  }
}

const resolver = { Mutation: { addCom } }

module.exports = resolver
