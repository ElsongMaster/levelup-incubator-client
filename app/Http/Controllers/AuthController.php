<?php

namespace App\Http\Controllers;

use App\Models\StartupUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
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
}
