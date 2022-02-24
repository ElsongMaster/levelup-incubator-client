<?php

namespace App\Http\Controllers;

use App\Models\AskingDocs;
use App\Models\Document;
use App\Models\DocumentDemand;
use App\Models\Startup;
use App\Models\StartupUser;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
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
        $newDocument->name= $rq->name;
        $newDocument->save();


        return  [
            "message" => "le document a été correctement stocké",
            "nameFile"=>$newDocument->filepath,
            "docId"=>$newDocument->id,
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

    //Download
    public function download($docId,Request $rq)
    {
        // dd($docId);
        $user = $rq->user();
        $startupId = $user->startup->id;

        $startup = Startup::where('id', $startupId)->get();
        $startupName = $startup[0]->name;
        $folderName = str_replace(' ', '_', $startupName);

        $download = Document::find($docId);
        return response()->download('modules/incubator/' . $folderName . '/' . $download->filepath);
    }

    //Demande de document
    public function askDoc( Request $rq)
    {
        $user = $rq->user();
        $startupId = $user->startup->id;

        $store = new AskingDocs;

        $store->by_startup = true;
        $store->startup_id = $startupId;

        // $store->helper_user_id = $request->helper_user_id;
        $store->document_title = $rq->titre;
        $store->document_description = $rq->description;

        $store->save();
        return response()->json([
            'message' =>'Demande Ajoutée avec succès',
            'data' => $store
        ],201);
    }

    //Voir les documents demandés
    public function seeAskedDocs(Request $rq){
        $user = $rq->user();
        $startupId = $user->startup->id;

        // $startup = Startup::find($startupId);

        $askedStartupDocs = AskingDocs::where('startup_id', $startupId)->get();

        // $documents = Document::where('startup_id', $startupId)->get();

        return response()->json([
            "message"=>"Documents demandés récupérés avec succès",
            "data"=>$askedStartupDocs
        ]);

    }
}
