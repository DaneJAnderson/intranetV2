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
        $suggest = $SuggestionBox->setSuggestion($input);

        // return $input;

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

    function getAdm(){
        
        $SuggestionBox = new suggestion();
        $suggest = $SuggestionBox->getAdm();

        return response()->json($suggest);

    }

    function suggestResponse(Request $request){      
      
        $input = $request->only(['id','response','hradmin','subject','suggestion', 'status']);
        $SuggestionBox = new suggestion();
        $suggest = $SuggestionBox->addResponse($input);

        return response()->json($suggest);
    
    }
}
