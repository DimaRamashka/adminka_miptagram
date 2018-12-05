export default interface configuration {
    title: string,
    apiKey: string,
    bootstrap: boolean,
    conf: {
        YouTube: {
             apiKey: string
        }
    },
    domains: Array<string>,
    isVerifiedUser:   boolean                             
}