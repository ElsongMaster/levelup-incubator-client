<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentDemand extends Model
{
    use HasFactory;
    
    public function startup(){
        return $this->belongsTo(Startup::class);
    }

    public function StartupNotifications () {
        return $this->morphMany(StartupNotifications::class, 'startupNotifiable');
    }
}
