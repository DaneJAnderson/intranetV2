<?php

namespace App\Http\Controllers\forms;

use App\Http\Controllers\Controller;
use App\Models\forms\yearly_personalinfo;
use Illuminate\Http\Request;
use App\Models\forms\yearly_personal_records;


class personalInfo extends Controller
{
    //
    
    function postForms(Request $res){

        $email = $res->email;
        $fname = $res->fname;
        $lname = $res->lname;
        $response = $res->all();

        // return ['FirstName''=>$response['fname'], 'LastName' '=> $res->lname, 'emp_date' '=> $res->emp_date];

        // $form2 = yearly_personal_records::create($response);

        $data= $this->getData($response);

        $form2 = yearly_personal_records::create($data);


        return response()->json($form2 );
        // return response()->json($response );


        $forms = yearly_personalinfo::updateOrCreate(
            ['email'=> $email],
            ['fname'=> $fname, 'lname'=> $lname, 'email'=> $email]
        );

        $form2 = yearly_personal_records::create([
            'fname'=> $fname, 'lname'=> $lname, 'email'=> $email,
        ]);

        return response()->json([$forms,$form2]);

    }

    function getForms(){
        //
    }

   function getData($res){

        return [
            'emp_date'=> $res['emp_date'],
            'trn'=>$res['trn'],
            'nis'=>$res['nis'],
            'gov_id'=>$res['gov_id'],
            'dob'=>$res['dob'],
            'title'=>$res['title'],
            'fname'=> $res['fname'],
            'lname'=> $res['lname'],
            'middle_name'=>$res['middle_name'],
            'gender'=>$res['gender'],
            'prev_name'=>$res['prev_name'],
            'address1'=>$res['address1'],
            'address2'=>$res['address2'],
            'city'=>$res['city'],
            'address_duration_month'=>$res['address_duration_month'],
            'address_duration_year'=>$res['address_duration_year'],
            'homephone'=>$res['homephone'],
            'cellphone'=>$res['cellphone'],
            'personal_email'=>$res['personal_email'],
            'cok_email'=>$res['cok_email'],
            'status'=>$res['status'],
            'martial_status'=>$res['martial_status'],
            'height'=>$res['height'],
            'weight'=>$res['weight'],
            'emergency_name'=>$res['emergency_name'],
            'emergency_address1'=>$res['emergency_address1'],
            'emergency_address2'=>$res['emergency_address2'],
            'emergency_relationship'=>$res['emergency_relationship'],
            'emergency_homephone'=>$res['emergency_homephone'],
            'emergency_cellphone'=>$res['emergency_cellphone'],
            'emergency_email'=>$res['emergency_email'],
            'family_childnum'=>$res['family_childnum'],
           
            'family_child_name1'=>$res['family_child_name1'],
            'family_child_dob1'=>$res['family_child_dob1'],
            'family_child_gender1'=>$res['family_child_gender1'],
            'family_child_name2'=>$res['family_child_name2'],
            'family_child_dob2'=>$res['family_child_dob2'],
            'family_child_gender2'=>$res['family_child_gender2'],
            'family_child_name3'=>$res['family_child_name3'],
            'family_child_dob3'=>$res['family_child_dob3'],
            'family_child_gender3'=>$res['family_child_gender3'],
            'family_child_name4'=>$res['family_child_name4'],
            'family_child_dob4'=>$res['family_child_dob4'],
            'family_child_gender4'=>$res['family_child_gender4'],
            'family_child_name5'=>$res['family_child_name5'],
            'family_child_dob5'=>$res['family_child_dob5'],
            'family_child_gender5'=>$res['family_child_gender5'],
           
            'family_spouse_type'=>$res['family_spouse_type'],
            'family_spouse_change'=>$res['family_spouse_change'],
            'family_spouse_name'=>$res['family_spouse_name'],
            'family_spouse_address1'=>$res['family_spouse_address1'],
            'family_spouse_address2'=>$res['family_spouse_address2'],
            'family_spouse_homephone'=>$res['family_spouse_homephone'],
            'family_spouse_cellphone'=>$res['family_spouse_cellphone'],
            'family_spouse_email'=>$res['family_spouse_email'],
      
            'edu_institution1'=>$res['edu_institution1'],
            'edu_institution_location1'=>$res['edu_institution_location1'],
            'edu_qualification1'=>$res['edu_qualification1'],
            'edu_year_graduated1'=>$res['edu_year_graduated1'],
      
            'edu_institution2'=>$res['edu_institution2'],
            'edu_institution_location2'=>$res['edu_institution_location2'],
            'edu_qualification2'=>$res['edu_qualification2'],
            'edu_year_graduated2'=>$res['edu_year_graduated2'],
      
            'edu_institution3'=>$res['edu_institution3'],
            'edu_institution_location3'=>$res['edu_institution_location3'],
            'edu_qualification3'=>$res['edu_qualification3'],
            'edu_year_graduated3'=>$res['edu_year_graduated3'],
      
            'edu_institution4'=>$res['edu_institution4'],
            'edu_institution_location4'=>$res['edu_institution_location4'],
            'edu_qualification4'=>$res['edu_qualification4'],
            'edu_year_graduated4'=>$res['edu_year_graduated4'],
      
            'training_institution1'=>$res['training_institution1'],
            'training_location1'=>$res['training_location1'],
            'training_certification1'=>$res['training_certification1'],
            'training_year_graduated1'=>$res['training_year_graduated1'],
      
            'training_institution2'=>$res['training_institution2'],
            'training_location2'=>$res['training_location2'],
            'training_certification2'=>$res['training_certification2'],
            'training_year_graduated2'=>$res['training_year_graduated2'],
      
            'training_institution3'=>$res['training_institution3'],
            'training_location3'=>$res['training_location3'],
            'training_certification3'=>$res['training_certification3'],
            'training_year_graduated3'=>$res['training_year_graduated3'],
      
            'training_institution4'=>$res['training_institution4'],
            'training_location4'=>$res['training_location4'],
            'training_certification4'=>$res['training_certification4'],
            'training_year_graduated4'=>$res['training_year_graduated4'],
      
            'training_institution5'=>$res['training_institution5'],
            'training_location5'=>$res['training_location5'],
            'training_certification5'=>$res['training_certification5'],
            'training_year_graduated5'=>$res['training_year_graduated5'],
      
            'cok_relatives_name1'=>$res['cok_relatives_name1'],
            'cok_relatives_branch1'=>$res['cok_relatives_branch1'],
            'cok_relatives_relation1'=>$res['cok_relatives_relation1'],
      
            'cok_relatives_name2'=>$res['cok_relatives_name2'],
            'cok_relatives_branch2'=>$res['cok_relatives_branch2'],
            'cok_relatives_relation2'=>$res['cok_relatives_relation2'],
      
            'cok_relatives_name3'=>$res['cok_relatives_name3'],
            'cok_relatives_branch3'=>$res['cok_relatives_branch3'],
            'cok_relatives_relation3'=>$res['cok_relatives_relation3'],
      
            'cok_relatives_name4'=>$res['cok_relatives_name4'],
            'cok_relatives_branch4'=>$res['cok_relatives_branch4'],
            'cok_relatives_relation4'=>$res['cok_relatives_relation4'],
      
            'cok_relatives_name5'=>$res['cok_relatives_name5'],
            'cok_relatives_branch5'=>$res['cok_relatives_branch5'],
            'cok_relatives_relation5'=>$res['cok_relatives_relation5'],
            'pep_check'=>$res['pep_check'],
            'pep_persons'=>$res['pep_persons'],
            'charity_check'=>$res['charity_check'],
            'charity_persons'=>$res['charity_persons'],
      
            'banking_institution1'=>$res['banking_institution1'],
            'banking_account_type1'=>$res['banking_account_type1'],
            'banking_joint_holder1'=>$res['banking_joint_holder1'],
            'banking_account_balance1'=>$res['banking_account_balance1'],
      
            'banking_institution2'=>$res['banking_institution2'],
            'banking_account_type2'=>$res['banking_account_type2'],
            'banking_joint_holder2'=>$res['banking_joint_holder2'],
            'banking_account_balance2'=>$res['banking_account_balance2'],
      
            'banking_institution3'=>$res['banking_institution3'],
            'banking_account_type3'=>$res['banking_account_type3'],
            'banking_joint_holder3'=>$res['banking_joint_holder3'],
            'banking_account_balance3'=>$res['banking_account_balance3'],
      
            'banking_institution4'=>$res['banking_institution4'],
            'banking_account_type4'=>$res['banking_account_type4'],
            'banking_joint_holder4'=>$res['banking_joint_holder4'],
            'banking_account_balance4'=>$res['banking_account_balance4'],
      
            'guarantor_check'=>$res['guarantor_check'],
            'guarantor_details'=>$res['guarantor_details'],
      
            'guarantor_poa'=>$res['guarantor_poa'],
      
            'guarantor_poa_institution1'=>$res['guarantor_poa_institution1'],
            'guarantor_poa_branch1'=>$res['guarantor_poa_branch1'],
            'guarantor_poa_account_type1'=>$res['guarantor_poa_account_type1'],
            'guarantor_poa_joint_holder1'=>$res['guarantor_poa_joint_holder1'],
      
            'guarantor_poa_institution2'=>$res['guarantor_poa_institution2'],
            'guarantor_poa_branch2'=>$res['guarantor_poa_branch2'],
            'guarantor_poa_account_type2'=>$res['guarantor_poa_account_type2'],
            'guarantor_poa_joint_holder2'=>$res['guarantor_poa_joint_holder2'],
      
            'guarantor_poa_institution3'=>$res['guarantor_poa_institution3'],
            'guarantor_poa_branch3'=>$res['guarantor_poa_branch3'],
            'guarantor_poa_account_type3'=>$res['guarantor_poa_account_type3'],
            'guarantor_poa_joint_holder3'=>$res['guarantor_poa_joint_holder3'],
      
            'confirm_info'=>$res['confirm_info'],
      
      
            'effective_date_name_info'=>$res['effective_date_name_info'],
            'effective_date_address_info'=>$res['effective_date_address_info'],
            'effective_date_persona_data'=>$res['effective_date_persona_data'],
            'effective_date_emergency'=>$res['effective_date_emergency'],
            'effective_date_family_info'=>$res['effective_date_family_info'],
            'effective_date_edu_history'=>$res['effective_date_edu_history'],
            'effective_date_credit_history'=>$res['effective_date_credit_history'],
            'effective_date_charity'=>$res['effective_date_charity'],
            'effective_date_staff_acc'=>$res['effective_date_staff_acc'],
        ];
    }
}
