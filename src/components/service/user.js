let user = {
    name: "Navneet",
    type: 'Security',
    id: 123,
    password: 123
}

export function getUser() {
    return user;
}
export function setUser(data) {
    user = { ...data };
}