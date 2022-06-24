type Auth = {
    UserName: string
    Email: string
    Password: string
}

type Customer = {
    auth: Auth
    servicersFollowing: []
}

type Servicer = {
    auth: Auth
    resteraunt: string
}

type Manager = {
    auth: Auth
    resteraunt: string
}

type Resteraunt = {
    name: string
    servicersEmployed: []
}

type User = {
    auth: Auth
    type: Manager | Servicer | Customer
}