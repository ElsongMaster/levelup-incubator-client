<?php

namespace App\Http\Controllers;

use App\Models\Startup;
use App\Models\StartupNotifications;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $rq)
    {
        $user = $rq->user();
        $notifications = $user->startup->startupNotifications()->get();

        return [
            "data" => $notifications,
            "statut" => 200
        ];
    }




    public function notificationsRead(Request $rq)
    {

        $notifications = $rq->user()->startup->startupNotifications;

        foreach ($notifications as $notification) {
            $notification->viewed = true;

            $notification->save();
        }


        return [
            "msg" => "statut des notifications modifié avec succés",
            "statut" => 200,
            'data' => $notifications
        ];
    }
}
