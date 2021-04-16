<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\noticeboard;

class noticeboardController extends Controller
{
    //
    function getDataHome(){        
        $data = noticeboard::where('status', 1)->orderBy('created_at', 'desc')->take(3)->get();
        return response()->json($data);
    }

    function getDataAdmin(){         
        // $data = noticeboard::all()->sortByDesc('created_at');
        $data = noticeboard::where('status', 1)->orderBy('created_at', 'desc')->get();
        return response()->json($data);
    }

    function getDataAdminPaginate(){         
        
        $data = noticeboard::where('status', 1)->orderBy('created_at', 'desc')->paginate(16);
        return response()->json($data);
    }

    function setNameAdmin(Request $res) {
        $id = $res->id;
        $name = $res->name;

        // Update Database Field Method One
        $data = noticeboard::find($id);
        $data->name = $name;
        $data->save();

        return $data;
    }

    function removeNoticeAdmin(Request $res) {

        $id = $res->id;

        $data = noticeboard::find($id);
        $data->status = '3';
        $data->save();

        // Update Database Field Method One
        // $data = noticeboard::where('id', $id)->update(['status'=>3]);  
        return $data;
    }


}
