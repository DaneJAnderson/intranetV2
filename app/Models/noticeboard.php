<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class noticeboard extends Model
{
    protected $table = 'noticeboard';
    protected $primaryKey = 'id';
    // public $timestamps = false;
    use HasFactory;
}
