<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\StartupController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route privée
Route::post('/v1/login', [StartupController::class, 'login']);
Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('/v1/logout', [StartupController::class, 'logout']);
    Route::post('/v1/upload', [DocumentController::class, 'uploadFile']);
    Route::get('/v1/files', [DocumentController::class, 'index']);
});