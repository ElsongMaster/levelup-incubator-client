<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\StartupController;
use App\Http\Controllers\StartupUserController;
use App\Http\Controllers\TaskController;
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

//route publique
Route::post('/v1/login', [AuthController::class, 'login']);

// Route privée
Route::group(['middleware' => ['auth:sanctum']], function () {

    //authentification
    Route::get('/v1/logout', [AuthController::class, 'logout']);

    //startup-user
    Route::get('/v1/startupuser/user', [StartupUserController::class, 'getUser']);
    Route::put('/v1/startupuser/update', [StartupUserController::class, 'updateProfile']);


    //document
    Route::post('/v1/upload', [DocumentController::class, 'uploadFile']);
    Route::get('/v1/files', [DocumentController::class, 'index']);

    //task
    Route::get('/v1/tasks', [TaskController::class, 'index']);
    Route::put('/v1/task/status', [TaskController::class, 'changeStatus']);

    // Goals
    Route::get('/v1/goals', [GoalController::class, 'index']);
    Route::get('/v1/goals/tasks/{goalTaskId}', [GoalController::class, 'validateTask']);
});
