<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\noticeboardController;
use App\Http\Controllers\BirthdayController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\suggestionBoxController;
use App\Http\Controllers\uploadsController;
use App\Http\Controllers\noticeUploadController;
use App\Http\Controllers\FormController;
use App\Models\noticeboard;
use App\Http\Controllers\UserController;

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


///************ Includes ***************///

include('formsApi.php');

///****************************************///

// Get 3 notices for Home page 
Route::get('noticeboard3',[noticeboardController::class,  'getDataHome']);

// Get all Notices for Admin page
// Route::get('noticeboard-admin',[noticeboardController::class,  'getDataAdmin']);
Route::get('noticeboard-admin',[noticeboardController::class,  'getDataAdminPaginate']);

// Update Notice Title
Route::put('noticeboard-setname-admin',[noticeboardController::class,  'setNameAdmin']);

// Remove Notice
Route::put('noticeboard-remove-admin',[noticeboardController::class,  'removeNoticeAdmin']);

// Get Birthdays this Month
Route::get('birthdays-this-month',[BirthdayController::class,  'getBirthdaysThisMonth']);

//  Get Paginated Gallery
Route::get('gallery',[GalleryController::class,  'getGallery']);

// Get All Gallery Data
Route::get('gallery-all',[GalleryController::class,  'getGalleryAll']);

// Get Document Type
Route::get('doc-type',[DocumentsController::class,  'getDocType']);

// Get Documents
Route::get('documents/{id}',[DocumentsController::class,  'getDocumentByID']);

// Get SubFolders
Route::post('subfolder',[DocumentsController::class,  'getDocumentBySubType']);


//  Get Paginated Suggestion
Route::get('suggestion-box',[suggestionBoxController::class,  'retrieves']);

// Post a Suggestion
Route::post('post-suggestion',[suggestionBoxController::class,  'creates']);

// Create new Records file Api
Route::post('uploads/post',[uploadsController::class, 'post']);

// Upload Notice 
Route::post('uploads/postnotice',[noticeUploadController::class, 'postNotice']);

// Create a New Document Type
Route::post('uploads/add-doctype',[uploadsController::class, 'addDocType']);

//  Get Subfolders
Route::get('subfolder-admin',[uploadsController::class, 'getSubfolders']);

// Post User Login
Route::post('userlogin',[UserController::class,  'auth']);

