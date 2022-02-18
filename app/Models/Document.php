<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    public $table = "documents";

    public function startup(){
        return $this->belongsTo(Startup::class);
    }
}
