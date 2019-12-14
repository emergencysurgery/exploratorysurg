export const signup = user => {
    return $.ajax({
        url: `/api/users`,
        method: 'POST',
        data: { user }
    })
}


export const login = user => {
    return $.ajax({
        url: `/api/session`,
        method: 'POST',
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        url: `/api/session`,
        method: 'DELETE'
    })
}

export const update = (user) => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data:   user ,
        contentType: false,
        processData: false
    })
}

export const updateInfo = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: 'PATCH',
        data: { user }
    })
}
