<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoalTask extends Model
{
    use HasFactory;

    public function goals () {
        return $this->belongsToMany(Goal::class, 'pivot_goal_tasks')->using(PivotGoalTask::class);
    }
}
