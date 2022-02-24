<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Startup extends Model
{
    use HasFactory;
    public function startupUsers()
    {
        return $this->hasMany(StartupUser::class);
    }

    public function goals()
    {
        return $this->hasMany(Goal::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function documentDemands () {
        return $this->hasMany(DocumentDemand::class);
    }
}
