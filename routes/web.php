<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;

use Illuminate\Support\Arr;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

 Route::get('/', function () {

     $hostURLs = [
        'publicURL' => asset(''),        
        // 'StorageURL' => preg_replace('/\\\\/','/',storage_path())
            ];

    return view('home', $hostURLs ); //->with('hostURLs',$hostURLs);
}); 

// Route::get('/{any}', 'SpaController@index')->where('any', '.*');
Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');

