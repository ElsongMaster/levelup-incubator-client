<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {

        return [
            "data" => Task::all(),
        ];
    }
    public function getTask($id)
    {


        return [
            "data" => Task::find($id),
        ];
    }

    public function changeStatus(Request $rq)
    {
        // dd($rq->all());
        $rq->validate([
            "id" => "required",
            "status" => "required",
        ]);


        $task = Task::find($rq->id);

        $task->status = $rq->status;
        $task->save();

        return [
            "msg" => "status modifié avec succès"
        ];
    }
}
