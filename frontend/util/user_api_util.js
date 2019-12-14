export const fetchUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`

    })
}

export const fetchUsers =  () => {
    return $.ajax({
        url: `/api/users`
    })
}