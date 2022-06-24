import {  hash } from 'bcrypt'


export const encrypt = (password: string, callback: any) => {
    hash(password, 10, (err, hash) => {
        if(err) throw err
        callback(hash)
    })
}
