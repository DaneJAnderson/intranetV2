<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateYearlyPersonalRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yearly_personal_records', function (Blueprint $table) {
            $table->id();

            $table->timestamp('emp_date')->useCurrent();
            $table->string('trn', 100);
            $table->string('nis', 100);
            $table->string('gov_id', 100);
            
            $table->timestamp('dob')->nullable($value = true);
            $table->string('title', 10);
            $table->string('fname', 100);
            $table->string('lname', 100);
            $table->string('middle_name', 100);
            $table->string('gender', 10);
            $table->string('prev_name', 100);
            
            $table->text('address1');
            $table->text('address2');
            $table->text('city');
            $table->integer('address_duration_month');
            $table->integer('address_duration_year');
            
            $table->string('homephone', 15);
            $table->string('cellphone', 15);
            $table->string('personal_email', 300);
            $table->string('cok_email', 300);
            $table->integer('status')->default(1);
            $table->string('martial_status', 100);
            $table->string('height', 100);
            $table->string('weight', 100);

            $table->string('emergency_name', 200);
            $table->text('emergency_address1');
            $table->text('emergency_address2');
            $table->string('emergency_relationship', 100);
            $table->string('emergency_homephone', 15);
            $table->string('emergency_cellphone', 15);
            $table->string('emergency_email', 300);

            $table->string('family_childnum', 2);

            $table->string('family_child_name1', 200);
            $table->timestamp('family_child_dob1')->nullable($value = true);
            $table->string('family_child_gender1',10);

            $table->string('family_child_name2', 200);
            $table->timestamp('family_child_dob2')->nullable($value = true);
            $table->string('family_child_gender2',10);

            $table->string('family_child_name3', 200);
            $table->timestamp('family_child_dob3')->nullable($value = true);
            $table->string('family_child_gender3',10);

            $table->string('family_child_name4', 200);
            $table->timestamp('family_child_dob4')->nullable($value = true);
            $table->string('family_child_gender4',10);

            $table->string('family_child_name5', 200);
            $table->timestamp('family_child_dob5')->nullable($value = true);
            $table->string('family_child_gender5',10);

            $table->string('family_spouse_type',50);
            $table->string('family_spouse_change',5);
            $table->string('family_spouse_name',200);
            $table->text('family_spouse_address1');
            $table->text('family_spouse_address2');
            $table->string('family_spouse_homephone', 15);
            $table->string('family_spouse_cellphone', 15);
            $table->string('family_spouse_email', 300);

            $table->text('edu_institution1');
            $table->text('edu_institution_location1');
            $table->text('edu_qualification1');
            $table->timestamp('edu_year_graduated1')->nullable($value = true);

            $table->text('edu_institution2');
            $table->text('edu_institution_location2');
            $table->text('edu_qualification2');
            $table->timestamp('edu_year_graduated2')->nullable($value = true);

            $table->text('edu_institution3');
            $table->text('edu_institution_location3');
            $table->text('edu_qualification3');
            $table->timestamp('edu_year_graduated3')->nullable($value = true);

            $table->text('edu_institution4');
            $table->text('edu_institution_location4');
            $table->text('edu_qualification4');
            $table->timestamp('edu_year_graduated4')->nullable($value = true);

            $table->text('training_institution1');
            $table->text('training_location1');
            $table->text('training_certification1');
            $table->timestamp('training_year_graduated1')->nullable($value = true);

            $table->text('training_institution2');
            $table->text('training_location2');
            $table->text('training_certification2');
            $table->timestamp('training_year_graduated2')->nullable($value = true);

            $table->text('training_institution3');
            $table->text('training_location3');
            $table->text('training_certification3');
            $table->timestamp('training_year_graduated3')->nullable($value = true);

            $table->text('training_institution4');
            $table->text('training_location4');
            $table->text('training_certification4');
            $table->timestamp('training_year_graduated4')->nullable($value = true);

            $table->text('training_institution5');
            $table->text('training_location5');
            $table->text('training_certification5');
            $table->timestamp('training_year_graduated5')->nullable($value = true);

            $table->string('cok_relatives_name1',200);
            $table->string('cok_relatives_branch1',200);
            $table->string('cok_relatives_relation1',200);

            $table->string('cok_relatives_name2',200);
            $table->string('cok_relatives_branch2',200);
            $table->string('cok_relatives_relation2',200);

            $table->string('cok_relatives_name3',200);
            $table->string('cok_relatives_branch3',200);
            $table->string('cok_relatives_relation3',200);

            $table->string('cok_relatives_name4',200);
            $table->string('cok_relatives_branch4',200);
            $table->string('cok_relatives_relation4',200);

            $table->string('cok_relatives_name5',200);
            $table->string('cok_relatives_branch5',200);
            $table->string('cok_relatives_relation5',200);

            $table->string('pep_check',10);
            $table->text('pep_persons');

            $table->string('charity_check',10);
            $table->text('charity_persons');

            $table->text('banking_institution1');
            $table->text('banking_account_type1');
            $table->text('banking_joint_holder1');
            $table->text('banking_account_balance1');

            $table->text('banking_institution2');
            $table->text('banking_account_type2');
            $table->text('banking_joint_holder2');
            $table->text('banking_account_balance2');

            $table->text('banking_institution3');
            $table->text('banking_account_type3');
            $table->text('banking_joint_holder3');
            $table->text('banking_account_balance3');

            $table->text('banking_institution4');
            $table->text('banking_account_type4');
            $table->text('banking_joint_holder4');
            $table->text('banking_account_balance4');

            $table->string('guarantor_check',10);
            $table->text('guarantor_details');

            $table->text('guarantor_poa_institution1');
            $table->text('guarantor_poa_branch1');
            $table->text('guarantor_poa_account_type1');
            $table->text('guarantor_poa_joint_holder1');

            $table->text('guarantor_poa_institution2');
            $table->text('guarantor_poa_branch2');
            $table->text('guarantor_poa_account_type2');
            $table->text('guarantor_poa_joint_holder2');

            $table->text('guarantor_poa_institution3');
            $table->text('guarantor_poa_branch3');
            $table->text('guarantor_poa_account_type3');
            $table->text('guarantor_poa_joint_holder3');

            $table->string('confirm_info');

            $table->timestamp('effective_date_name_info')->nullable($value = true); 
            $table->timestamp('effective_date_address_info')->nullable($value = true); 
            $table->timestamp('effective_date_persona_data')->nullable($value = true); 
            $table->timestamp('effective_date_emergency')->nullable($value = true); 
            $table->timestamp('effective_date_family_info')->nullable($value = true); 
            $table->timestamp('effective_date_edu_history')->nullable($value = true); 
            $table->timestamp('effective_date_credit_history')->nullable($value = true); 
            $table->timestamp('effective_date_charity')->nullable($value = true); 
            $table->timestamp('effective_date_staff_acc')->nullable($value = true); 
            $table->timestamps();

            $table->unsignedBigInteger('personalinfo_id');
            $table->string('personalinfo_email');

            $table->foreign('personalinfo_id')->references('id')->on('yearly_personalinfo');
            $table->foreign('personalinfo_email')->references('cok_email')->on('yearly_personalinfo');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('yearly_personal_records');
    }
}
