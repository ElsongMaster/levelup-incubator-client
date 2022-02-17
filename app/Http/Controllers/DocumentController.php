<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class DocumentController extends Controller
{
    public function uploadFile(Request $rq){
        $path = public_path('Incubator/startup'+$rq->user());
        if(!File::isDirectory($path)){
            File::makeDirectory($path, 0777, true, true);
        }

        return;
    }
}
