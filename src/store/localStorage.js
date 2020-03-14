export const loadState = () => {
    try {
        const localStorageState = localStorage.getItem('list');
        if (localStorageState === null) {
            return undefined;
        }
        return JSON.parse(localStorageState);
    } catch (err) {
        console.log('Não foi possivel recuperar o estado', err)
        return undefined
    }
}
export const saveState = state => {
    try {
        const localStorageState = JSON.stringify(state)
        localStorage.setItem('list', localStorageState)
    } catch (err) {
        console.log('não foi possivel salvar o estado', err)
    }
}