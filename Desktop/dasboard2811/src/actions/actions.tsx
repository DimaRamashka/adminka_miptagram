import configuration from "../interfaces/configuration";

export function changepageIndex(page: string){
    return{
        payload: page,
        type: 'change_page'
    }
};
export function add_domain(payload: any){
    return{
        payload: payload,
        type: 'add_domain'
    }
};
export function keysLoadedChange(apiKeysLoaded: Array<{}>){
    return{
        apiKeysLoaded: apiKeysLoaded,
        type: 'keys_loaded_change'
    }
};
export function domainsLoadedChange(domainsLoaded: Array<{}>){
    return{
        domainsLoaded: domainsLoaded,
        type: 'domains_loaded_change'
    }
};
export function updateNameAndMail(mail: string, name: string){
    return{
        name: name,
        mail: mail,
        type: 'update_name_and_mail'
    }
};
export function setApiEdit(apiKeyEdit: string){
    return{
        apiKeyEdit: apiKeyEdit,
        type: 'setApiEdit'
    }
};

export function updateAddDomainState(addDomainState: boolean) {
    return {
        addDomainState: addDomainState,
        type: 'update_add_domain_state'
    }
};