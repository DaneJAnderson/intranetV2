<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\noticeboard;

class noticeboardController extends Controller
{
    //
    function getData(){
        // return noticeboard::all()->orderBy('created', 'desc')->limit(2);
        $data = noticeboard::orderBy('created', 'desc')->take(3)->get();
        return response()->json($data);
    }
}
