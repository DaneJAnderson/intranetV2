<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\gallery;

class GalleryController extends Controller
{
    //

    function getGallery(){ // Paginated Data

                // $data = gallery::all()->sortByDesc('created_at');
                $data = gallery::where('status', 1)->orderBy('id', 'desc')->paginate(12);
                return response()->json($data);
    }
    function getGalleryAll(){

                // $data = gallery::all()->sortByDesc('created_at');
                $data = gallery::where('status', 1)->orderBy('id', 'desc')->get();
                return response()->json($data);
    }

    function removeImage(Request $res) {

        $id = $res->id;

        $data = gallery::find($id);
        $data->status = '3';
        $data->save();

        // Update Database Field Method One
        // $data = noticeboard::where('id', $id)->update(['status'=>3]);  
        return $data;
    }

    public function postGallery(Request $request){        

        $Files = $request->all();
        
       if ($request->hasFile('files') || $request->hasFile('file')) {
       
          $path = storage_path();
          // $path = public_path();    

         $files = $request->file('files')?$request->file('files'):$request->file('file'); 
         foreach ($files as $file) {        
         $url = $file->move($path.'\app\public\images\galleries', $file->getClientOriginalName());
         $notice = new gallery();
         $notice->image = $file->getClientOriginalName();
         $response = $notice->save();
         }
           
       }   
       
       return response()->json($response);
        
   }
}
