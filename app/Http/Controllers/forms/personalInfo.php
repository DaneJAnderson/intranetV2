<?php

namespace App\Http\Controllers\forms;

use App\Http\Controllers\Controller;
use App\Models\forms\yearly_personalinfo;
use Illuminate\Http\Request;


class personalInfo extends Controller
{
    //
    
    function postForms(Request $res){

        $email = $res->email;
        $fname = $res->fname;
        $lname = $res->lname;
        $response = $res->all();

        return ['FirstName'=>$response['fname'], 'LastName' => $response['lname']];


        $forms = yearly_personalinfo::updateOrCreate(
            ['email' => $email],
            ['fname' => $fname, 'lname' => $lname, 'email' => $email]
        );

        return response()->json($forms);

    }

    function getForms(){
        //
    }
}
