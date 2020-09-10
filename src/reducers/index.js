import {combineReducers}from 'redux';

const personReducer =()=>{
    return [
        {name:"naga",height:'5.1',weight:'62'},
        {name:"rakesh",height:'5.5',weight:'64'},
        {name:"tagoor",height:'409',weight:'74'},
        {name:"ganesh",height:'4.11',weight:'58'},
        {name:"harish",height:'5.7',weight:'43'},
        {name:"nagesh",height:'5.0',weight:'49'},
        {name:"kishan",height:'5.9',weight:'57'},
        {name:"ramulu",height:'6.1',weight:'54'},
        {name:"krushna",height:'6.0',weight:'74'},
        {name:"hari",height:'4.8',weight:'78'},
        {name:"radha",height:'5.2',weight:'52'},
        {name:"gopi",height:'5.0',weight:'77'},
    ]
}

const selectedPersonReducer = (selectedPerson = null,action)=>{
    if(action.type==="PERSON_SELECTED"){
        return action.payload
    }
    return selectedPerson;
}

export default combineReducers({
    persons:personReducer,
    selectedPerson:selectedPersonReducer
})