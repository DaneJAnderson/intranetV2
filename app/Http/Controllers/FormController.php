<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\form;

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

        return $forms;

    }

    function getForms(){
        //
    }
}
