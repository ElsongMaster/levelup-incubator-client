<?php

namespace App\Http\Controllers;

use App\Models\Startup;
use App\Models\StartupUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class StartupController extends Controller
{
    public function login(Request $rq)
    {
        $fields =  $rq->validate([
            'email' => 'required|string',
            'password' => 'required|string|min:4',
        ]);

        // Getting user who want to login
        $user = StartupUser::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response(['message' => 'Bad creds, email or password is not correct'], 401);
        }
        $token = $user->createToken('myapptoken')->plainTextToken;
        return [
            "msg" => "succès",
            "token" => $token,
            "statut" => 200
        ];
    }


    public function logout(Request $rq)
    {
        // Getting the current connected user
        $user = $rq->user();
        // dd($user);
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        // Auth::guard('admin')->logout();

        // $rq->session()->invalidate();

        // $rq->session()->regenerateToken();

        return [
            'message' => 'logged out',
            'data' => [],
            'status' => 200,
            'error' => []
        ];
    }



    public function updateProfile(Request $rq)
    {
        $rq->validate([
            "firstname" => "required||string",
            "lastname" => "required||string",
            "email" => "required||string|unique:startup_user",
            // "logo" => "required|max:2048||mimes:jpeg,jpg,png",
        ]);

        dd($rq->user());
        $user = StartupUser::where('email', '=', $rq->lastemail)->get();

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
    }
}
