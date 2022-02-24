<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $rq){

        $user = $rq->user();

        $notifications = $user->startup->notifications()->get();
        
        return[
            "data"=>$notifications,
            "statut"=>200
        ];

    }


    public function notificationRead(Request $rq){
        $rq->validate([
            "id"=>"required"
        ]);

        $notification = Notification::find($rq->id);
        $notification->read = true;
        $notification->save();


        return[
            "msg"=>"statut de la notification modifié avec succés",
            "statut"=>200
        ];

    }



}
