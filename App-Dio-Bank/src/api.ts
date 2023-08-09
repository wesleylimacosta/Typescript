const conta = {
    id:'1',
    email: 'teste@gmail.com',
    password: '123456',
    name: 'Wesley',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout( () => {
        resolve(conta)
    },3000)
})