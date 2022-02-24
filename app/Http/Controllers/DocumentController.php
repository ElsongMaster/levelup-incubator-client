<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\DocumentDemand;
use App\Models\Startup;
use App\Models\StartupUser;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class DocumentController extends Controller
{

    public function index(Request $rq)
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
        $user = $rq->user();

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
            "nameFile"=>$newDocument->filepath,
            "status" => 200,
        ];
    }

    public function askFiles(Request $rq){
        $rq->validate([
            "document_title"=>"required"
        ]);

        $user = $rq->user();
        if (!$user) {
            return [
                "msg" => "Vous n'êtes pas connecté",
                "status" => 401
            ];
        }

        $newAskingDocument = new DocumentDemand;
        $newAskingDocument->startup_id = $user->startup->id;
        $newAskingDocument->by_startup = true;
        $newAskingDocument->document_title = $rq->document_title;
        $newAskingDocument->description = $rq->description;
        $newAskingDocument->save();

        return[
            "msg" => "Demande reçu avec succès",
            "status" => 200
        ];



        
    }

    
}
