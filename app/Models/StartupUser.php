<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class StartupUser extends Authenticatable
{

    protected $table = "startup_users";
    use HasFactory;
    use HasApiTokens;
    public function startup()
    {
        return $this->belongsTo(Startup::class);
    }
}
