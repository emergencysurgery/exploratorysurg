export const createPost = post => {
    return $.ajax({
        url: `/api/posts`,
        method: 'POST',
        data:  post ,
        contentType: false,
        processData: false
    })
}

export const fetchPosts = (profileId) => {
    return $.ajax({
        url: `/api/posts`,
        data: {user: profileId}
    })
}

export const fetchPost = postId => {
    return $.ajax({
        url: `/api/posts/${postId}`,
    })
}

export const updatePost = post => {
    return $.ajax({
        url: `/api/posts/${post.id}`,
        method: 'PATCH',
        data: post,
        contentType: false,
        processData: false

    })
}

export const deletePost = postId => {
    return $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE',
        data: { id: postId }
    })
}

