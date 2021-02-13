<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

//  Get Form
Route::get('getforms',[FormController::class,  'getForms']);

// Post Form
Route::post('postforms',[FormController::class,  'postForms']);

// Post 
Route::post('userlogin',[FormController::class,  'auth']);