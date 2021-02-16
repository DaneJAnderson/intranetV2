<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\forms\personalInfo;

//  Get Form
Route::get('getforms',[personalInfo::class,  'getForms']);

// Post Form
Route::post('postforms',[personalInfo::class,  'postForms']);
