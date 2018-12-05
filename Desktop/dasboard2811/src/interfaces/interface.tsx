import configuration from './configuration';

export default interface State {
    navigation: {
        pageIndex: string,
        keysLoaded: Array<{}>,
        domainsLoaded: Array<{}>,
        addDomainState: boolean,
        apiKeyEdit: string
    },
    profile: {
        name: string,
        mail: string
    }
}