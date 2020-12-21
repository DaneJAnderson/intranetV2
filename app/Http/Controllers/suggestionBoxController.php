<?php

namespace App\Http\Controllers;

use DB;
use App\Models\suggestion;

use Illuminate\Http\Response;

use Illuminate\Http\Request;

use App\Http\Requests;

class suggestionBoxController extends Controller
{
   

    function creates(Request $request){

        $input = $request->only(['subject', 'suggestion']);
        $SuggestionBox = new suggestion();
        $suggest = $SuggestionBox->suggestion($input);

        return response()->json($suggest);

    }

    function updates(Request $request){

       // return "Am here";

        $input = $request->input('id');
        $SuggestionBox = new suggestion();
        $suggest = $SuggestionBox->updates($input);

        return response()->json($suggest);

    }

    function retrieves(){
        
        $SuggestionBox = new suggestion();
        $suggest = $SuggestionBox->retrieveSuggest();

        return response()->json($suggest);

    }

    function suggest_response(Request $request){      
      
        $input = $request->only(['id','response','user']);
        $SuggestionBox = new suggestion();
        $suggest = $SuggestionBox->addResponse($input);

        return response()->json($suggest);
    
    }
}
