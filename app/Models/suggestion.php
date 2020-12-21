<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class suggestion extends Model
{
    use HasFactory;

    function suggestion ($suggest){

        $subject = $suggest['subject'];
        $suggestion = $suggest['suggestion'];

        $SuggestBox = DB::insert("insert into suggestions (suggestion,subject) values (?,?)", [$subject, $suggestion]);

        return $SuggestBox;

    }

    public function retrieveSuggest()
    { 
        // $Suggest = DB::select("SELECT *FROM suggestions where status <> 3");  
        $Suggest = suggestion::where('status', 1)->orderBy('updated_at', 'desc')->paginate(12);             
        return $Suggest;
    }

    public function updates($id)
    { 
        $Suggest = DB::update('update suggestions set status = 3 where id = ?', [$id]);              
        return $Suggest;
    }

    public function addResponse($input)
    {   $id = $input['id'];
        $response = $input['response'];
        $user = $input['user'];
        // $query = 'update suggestions set response = '.$response.' where id = ?';
         $Suggest = DB::update("update suggestions set response = '$response', hradmin ='$user' where id = ?", [$id]); 
        
        // $Suggest = DB::table('suggestions')->where('response', $response);
        return $Suggest;
    }
}
