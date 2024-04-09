<?php

use App\Http\Controllers\ProdutoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/index',[ProdutoController::class,'index'])->name('api.index');
Route::post('/store',[ProdutoController::class,'store'])->name('api.store');
Route::get('/show/{id}',[ProdutoController::class,'show'])->name('api.show');
Route::get('/edit/{id}',[ProdutoController::class,'edit'])->name('api.edit');
Route::put('/update/{id}',[ProdutoController::class,'update'])->name('api.update');
Route::delete('/delete/{id}',[ProdutoController::class,'destroy'])->name('api.destroy');
