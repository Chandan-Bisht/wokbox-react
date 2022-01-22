const initialState = {
    user_info:{"user":{"id":"","email":"","first_name":"","last_name":"","phone_number":"","created_at":"","updated_at":""},"company":{"id":"","name":"","legal_entity_name":"","state_of_registration":"","phone_number":"","city":"","state":"","zip_code":"","created_at":"","updated_at":""}},
    questionnaire_data: {name:"",has_estimates:"", has_spoken_to_owner:"",is_disaster_related:"",  scope_of_work:""},
    requested_amount:'',
    installments:[{ name: '36 installments', months:36, priceMonthly: 0 },{ name: '24 installments', months:24, priceMonthly: 0 },{ name: '12 installments', months:12, priceMonthly: 0 },{ name: '6 installments', months:6, priceMonthly: 0 }],
    property_details:{address: "", apm_id: "",company_id: "",current_rent: "",id: "",next_vacancy: "",owner: "",room_for_improvement: ""},
    selected_installment:{ name: '36 installments', months:36, priceMonthly: 0 },
    project_data:{},
    notes_data:[],
  }
export default initialState