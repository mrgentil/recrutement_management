<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

    Route::group([
        'middleware' => 'api',
        'prefix' => 'auth'

    ], static function ($router) {
        //authentication
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::get('/user-profile', [AuthController::class, 'userProfile']);
        Route::get('/verify/{token}/{email}', [AuthController::class, 'accountVerify']);
        Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
        Route::post('/update-password', [AuthController::class, 'updatePassword']);
        //home

    });

Route::group(['middleware' => 'api'], function ($router) {
    Route::resource('/categories', CategoryController::class);
   // Route::resource('/applications', ApplicationController::class);
});

