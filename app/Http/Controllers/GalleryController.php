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
}
