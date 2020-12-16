<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Document extends Model
{
    use HasFactory;

    protected $fillable =
	[
        'id'
    ];


    /**
	* @Description: Get the lastest articles
	*
	* @param (void)
	*
	* @return (JSON) - Returns articles the lastest articles
	*/
	public function Document_Types()
	{
		$Document_Types = DB::select('CALL document_types_Retrieve();');
				
		return $Document_Types;
	}

	
	/**
	* @Description: Get the article by the ID
	*
	* @param (Integer) ID - The article ID
	*
	* @return (JSONOBJECT) - Returns article items or NULL
	*/
	public function Document_by_Types($id)
	{
		$Documents = DB::select('CALL documents_byType_Retrieve(?);', array($id));
		
		return $Documents;
	}


	/**
	* @Description: Get the article by subteypes
	*
	* @param (Integer) ID - The article ID
	*
	* @return (JSONOBJECT) - Returns article items or NULL
	*/
	public function Document_by_SubTypes($id, $subtype)
	{
		$Documents = DB::select('CALL documents_bySubType_Retrieve(?,?);', array($id, $subtype));
		return $Documents;	
	}
}
