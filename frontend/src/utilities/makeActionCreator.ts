export default function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action['payload'][argNames[index]] = args[index]
        })
        return action
    }
}