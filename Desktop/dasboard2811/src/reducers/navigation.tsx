const navigation = (state={pageIndex: "dashboard", addDomainState: false, keysLoaded: false, domainsLoaded: false, apiKeyEdit: undefined}, action: any) => {
    switch (action.type){
        
        case 'keys_loaded_change': state={
            ...state,
            keysLoaded: action.apiKeysLoaded
        };
        break;
        case 'update_add_domain_state': state={
            ...state,
            addDomainState: action.addDomainState
        }
        break;
        case 'domains_loaded_change': state={
            ...state,
            domainsLoaded: action.domainsLoaded
        };
    
        break;
        case 'setApiEdit': state={
            ...state,
            apiKeyEdit: action.apiKeyEdit
        };
    
        break;
        
        default : state={...state}
                       
    }
    return state;
};

export default navigation;