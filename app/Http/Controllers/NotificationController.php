<?php

namespace App\Http\Controllers;

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

    public function notificationRead($id)
    {
        $notification = StartupNotifications::find($id);
        $notification->viewed = true;
        $notification->save();

        return [
            "msg" => "statut de la notification modifié avec succés",
            "statut" => 200
        ];
    }

    
}
