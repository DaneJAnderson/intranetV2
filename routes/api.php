<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\noticeboardController;
use App\Models\noticeboard;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Get 3 notices for Home page 
Route::get('noticeboard',[noticeboardController::class,  'getDataHome']);

// Get all Notices for Admin page
Route::get('noticeboard-admin',[noticeboardController::class,  'getDataAdmin']);

// Update Notice Title
Route::put('noticeboard-setname-admin',[noticeboardController::class,  'setNameAdmin']);

// Remove Notice
Route::put('noticeboard-remove-admin',[noticeboardController::class,  'removeNoticeAdmin']);
