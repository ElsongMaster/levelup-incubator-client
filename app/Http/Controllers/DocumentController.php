<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\Startup;
use App\Models\StartupUser;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class DocumentController extends Controller
{

    public function index()
    {
        return [
            "data" => Document::all()
        ];
    }
    public function uploadFile(Request $rq)
    {
        $validate = Validator::make($params = $rq->all(), [

            'file' => 'required|mimes:jpeg,png,jpg,svg,doc,docx,odt,pdf,tex,txt,wpd,tiff,tif,csv,psd,key,odp,pps,ppt,pptx,ods,xls,xlsm,xlsx|max:2048',

        ]);
        if ($validate->fails()) {
            return response([
                "message" => "Document non conformes",
                "data" => [],
                "status" => 400,
                "error" => [
                    "flashToSession" => false,
                    "messages" => [
                        "errors" => $validate->errors()
                    ]
                ]
            ]);
        }
        $user = StartupUser::where('email', '=', $rq->email)->first();

        $startup = $user->startup;

        // Format the name of the startup for find the correct folder
        $folderName = str_replace(' ', '_', $startup->name);

        $path = public_path('modules/incubator/' . $folderName);
        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0777, true, true);
        }

        $newDocument = new Document;
        $rq->file('file')->storePublicly('modules/incubator/' . $folderName, 'public');
        $newDocument->filepath = $rq->file('file')->hashName();
        $newDocument->startup_id = $startup->id;
        $newDocument->save();




        return [
            "message" => "le document a été correctement stocké",
            "status" => 200,
        ];
    }
}
