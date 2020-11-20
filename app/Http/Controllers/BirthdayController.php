<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\birthday;
use Illuminate\Support\Facades\DB;

class BirthdayController extends Controller
{
    //

    function getBirthdaysThisMonth (){
        $Staff_details = DB::select('CALL get_staff_birthdays();');
        return $Staff_details;
    }
}
