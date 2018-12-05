const profile = (state={mail: "-", name: '-'}, action: any) => {
    switch (action.type){
        case 'change_password': state={
                ...state
            };
        
        break;
         case 'update_name_and_mail': state={
                ...state,
                mail: action.mail,
                name: action.name
            };
        
        break;
        default : state={...state}
                       
    }
    return state;
};

export default profile;