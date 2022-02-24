<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'startup_id',
        'helper_user_id',
    ];

    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }

    public function goalTasks()
    {
        return $this->belongsToMany(GoalTask::class, 'pivot_goal_tasks')->using(PivotGoalTask::class);
    }
}
