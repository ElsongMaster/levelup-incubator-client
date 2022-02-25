<?php

namespace App\Http\Controllers;

use App\Models\StartupNotifications;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $rq){

        $user = $rq->user();

        $notifications = $user->startup->startupNotifications()->get();
        
        return[
            "data"=>$notifications,
            "statut"=>200
        ];

    }

    


    public function notificationsRead(Request $rq){

        $rq->validate(([
            "notifications"=>"required"
        ]));

        foreach($rq->notifications as $notification ){

            $notificationTmp = StartupNotifications::find($notification->id);
            $notificationTmp->viewed = true;
            $notificationTmp->save();
        }


        return[
            "msg"=>"statut des notifications modifié avec succés",
            "statut"=>200
        ];

    }



}
