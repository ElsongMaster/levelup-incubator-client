<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AskHelp extends Model
{
    use HasFactory;

    protected $fillable = [
        'startup_id',
        'message',
        'status',
        'helper_user_id',
    ];

    // protected static function newFactory()
    // {
    //     return \Modules\Incubator\Database\factories\AskHelpFactory::new();
    // }

    public function StartupNotifications () {
        return $this->morphMany(StartupNotifications::class, 'startupNotifiable');
    }
}
