export const Rules =
{
    nameRules: [
        v => !!v || 'Name is required',
        v => v.length >= 2 || 'Name must be Greater than 1 characters',
      ],     
    emptyRules: [
        v => !!v || 'This is required',
        v => v.length >= 1 && v.trim()!='' || 'This field is required',
      ],     
    checkRules: [
        v => !!v || 'This is required',
        // v => v.length >= 1 && v.trim()!='' || 'This field is required',
      ],     
    isNumRules: [
        v =>  !isNaN(v) || 'A Number is required',
        v => (v.length >= 1 && v.trim()!='') || 'Must have at least 1 character',
      ],     
    idRules: [
        v => !!v || 'ID# is required',
       
      ],     
    trnRules: [
        v => !!v || 'TRN is required',
        v => v.length == 9 || 'Incorrect number of characters',
      ],     
    phoneRules: [
        v => !!v || 'Phone number is required',
        v => v.length == 12 || 'Incorrect number of characters',
      ],     
    nisRules: [
        v => !!v || 'NIS is required',
        v => v.length == 7 || 'Incorrect number of characters',
      ],     
    emailRules: [
        v => !!v || 'E-mail is required',
        // v => /.+@.+/.test(v) || 'E-mail must be valid',
        v => /^\S+@\S+\.\S+$/.test(v) || 'E-mail must be valid',
      ],

}