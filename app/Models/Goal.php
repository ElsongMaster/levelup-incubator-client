<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;

    public function goalTasks()
    {
        return $this->belongsToMany(GoalTask::class, 'pivot_goal_tasks')->using(PivotGoalTask::class);
    }
}
