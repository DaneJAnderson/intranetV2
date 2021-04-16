<?php

namespace App\Http\Controllers;

use DB;
use App\Models\noticeboard;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Document;

use App\Http\Requests;

class noticeUploadController extends Controller
{
   
   
   /*  public function creates(){

        return view('uploads.create');
   
    } */

    public function postNotice(Request $request){        

         $Files = $request->all();
        //  return response()->json($Files);
         
        if ($request->hasFile('files') || $request->hasFile('file')) {
        
           $path = storage_path();
           // $path = public_path();    

          $files = $request->file('files')?$request->file('files'):$request->file('file'); 
          foreach ($files as $file) {        
          $url = $file->move($path.'\app\public\images\News_Feed', $file->getClientOriginalName());
          }
     
        //   return $url;
        }
               
    /*   $posted = DB::insert("INSERT INTO  cok_intranet.documents (documents.name, documents.type, documents.file, documents.format, documents.status,
     documents.created_by, documents.updated_by,parent_category, documents.main_category)
        VALUES (?,?,?,?,?,?,?,?,?)", [$Files['name'],$Files['type'],$Files['url'],$Files['format'],1,1,1,$Files['parent_category'],$mainCat]); */

        $notice = new noticeboard();

        $notice->image = $request->image;
        $notice->name = $request->name;
        $notice->link = $request->link;
        $notice->type = $request->type;
        $response = $notice->save();

        // $response = $notice->post($Files);
        
        return response()->json($response);
        // return redirect('uploads/creates')->with('status', $response);        

    }

/* 
    function getSubfolders(){

        $subfolder = Document::where('status',1)->where('format',5)->get();
        return $subfolder;

    }

    public function update(){

        $Uploads = new Uploads();
        $upload = $Uploads->update();
        return view('uploads.update', ['upload' => $upload]);        
    }

    public function addDocType(Request $request){

        $name = $request->name;
        $Uploads = new Uploads();
        $upload = $Uploads->addDocType($name);
        return $upload;

    } */
 //
}
