<?php

namespace App\Http\Controllers;

use App\Models\StartupUser;
use Illuminate\Http\Request;

class StartupUserController extends Controller
{
    public function getUser(Request $rq){
       $user =  $rq->user();

       if(!$user){
           return[
               "msg"=>"Vous n'êtes pas connecté",
               "status"=>401
           ];
       }
        return[
            "data"=>[
                "email"=>$user->email,
                "fisrtname"=>$user->first_name,
                "lastname"=>$user->last_name,
            ],
            "status"=>200
        ];
    }
    public function updateProfile(Request $rq)
    {
        $rq->validate([
            "firstname" => "required||string",
            "lastname" => "required||string",
            "email" => "required||string",
            // "logo" => "required|max:2048||mimes:jpeg,jpg,png",
        ]);

        // dd($rq->user());

        $user = $rq->user();
        // $user = StartupUser::where('email', '=', $rq->lastemail)->get();
        if(!$user){
            return[
                "msg"=>"l'utulisateur n'existe pas",
                "status"=>401
            ];
        }
        $user->first_name = $rq->firstname;
        $user->last_name = $rq->lastname;
        $user->email = $rq->email;

        //pas nécessaire pour l'instant 

        // $path = public_path('Incubator/startup/' + $rq->user() . 'imageProfil/');
        // if (!File::isDirectory($path)) {
        //     File::makeDirectory($path, 0777, true, true);
        //     $rq->file('cover')->storePublicly('img/uploads', 'public');
        // }

        $user->save();

        return[
            "msg"=>"profil correctement modifié",
            "status"=>200
        ];
    }
}
