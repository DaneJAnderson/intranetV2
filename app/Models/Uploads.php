<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use File;
use Storage;
use Illuminate\Database\Eloquent\Model;
use App\Models\Utility;
use App\Exceptions\customValidationException;

class Uploads extends Model
{
    //
    public function creates(){


    }

    public function post($Files) {


        $posted = DB::insert("INSERT INTO  cok_intranet.documents (documents.name, documents.type, documents.file, documents.format, documents.status, documents.main_category, documents.created_by, documents.updated_by)
        VALUES (?,?,?,?,?,?,?,?)", [$Files['name'],$Files['type'],$Files['url'],$Files['format'],1,1,1,1]);
        
    
       return "Successfully Created !";

    }

    // public function update($id){

    //     $upload = DB::select('SELECT * FROM cok_intranet.documents LIMIT 3');

    //     // return response()->json($upload);
    //     return ['uploads' => $upload];
    // }
}
