<?php

namespace App\Http\Controllers;

use DB;
use App\Models\Uploads;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\Document;

use App\Http\Requests;

class uploadsController extends Controller
{
    public function creates(){

        return view('uploads.create');
   
    }

    public function post(Request $request){        

         $Files = $request->all();
         
        if ($request->hasFile('files') || $request->hasFile('file')) {
        
           $path = storage_path();
           // $path = public_path();
           $pre = explode("/", $Files['url']);
           if(empty($pre[1])){
                $pre[0]='pdf';
           }       
          // Storage::disk('local')->put('file.txt', 'Contents');  

        //   $file = $request->file('files')?$request->file('files'):$request->file('file'); 
        //   $url = $file->move($path.'\app\public\documents\\'.strtolower($pre[0]), $file->getClientOriginalName());

          $files = $request->file('files')?$request->file('files'):$request->file('file'); 
          foreach ($files as $file) {        
          $url = $file->move($path.'\app\public\documents\\'.strtolower($pre[0]), $file->getClientOriginalName());
          }
        //   $url = $request->file('file')->store('public/files');
        
          
        }
               
      
        $Uploads = new Uploads();
        $response = $Uploads->post($Files);
        
        return response()->json($response);
        // return redirect('uploads/creates')->with('status', $response);        

    }

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

    }

}
