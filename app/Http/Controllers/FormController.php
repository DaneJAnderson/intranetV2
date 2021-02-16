<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\form;
use Exception;
use Illuminate\Support\Facades\DB;

class FormController extends Controller
{
    //

    function postForms(Request $res){

        $email = $res->email;
        $fname = $res->fname;
        $lname = $res->lname;


        $forms = form::updateOrCreate(
            ['email' => $email],
            ['fname' => $fname, 'lname' => $lname, 'email' => $email]
        );

        return response()->json($forms);

    }

    function getForms(){
        //
    }

   
}