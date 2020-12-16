<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Utility;
use App\Exceptions\customValidationException;
use App\Models\Document;

class DocumentsController extends Controller
{
    
    public function getDocType(Request $request)
	{	
		//Variables
		$Document = new Document();
		$Documents = $Document->Document_Types();
		
		return response()->json($Documents);
	}


	// public function getDocumentByID(Request $request)
	public function getDocumentByID($id)
	{	
	
		$Document = new Document();
		$Utility = new Utility();
		// $document_id = $request->input('type');
		$document_id = $id;

		// return $document_id;

		if(isset($document_id) && $document_id!=NULL)
		{
			if(!empty($document_id) && is_numeric($document_id))
			{
				$document_id=$Utility->Clean_Data($document_id);
			}
			else
			{
				throw new customValidationException("A valid numeric document ID is required");
			}
		}
		else
		{
			throw new customValidationException("document ID required");
		}

		$documents = $Document->Document_by_Types($document_id);

		return response()->json($documents);
	}


	public function getDocumentBySubType(Request $request)	
	{	
		//Variables
		$Document = new Document();
		$Utility = new Utility();
		// $document_id = $request->input('id');
		$document_id = $request->id;		
		// $document_subtype_id = $request->input('type_id');
		$document_subtype_id = $request->type_id;

		// return response()->json([$document_id,$document_subtype_id]);

		if(isset($document_id) && $document_id!=NULL)
		{
			if(!empty($document_id) && is_numeric($document_id))
			{
				$document_id=$Utility->Clean_Data($document_id);
			}
			else
			{
				throw new customValidationException("A valid numeric document ID is required");
			}
		}
		else
		{
			throw new customValidationException("document ID required");
		}

		if(isset($document_subtype_id) && $document_subtype_id!=NULL)
		{
			if(!empty($document_subtype_id) && is_numeric($document_subtype_id))
			{
				$document_subtype_id=$Utility->Clean_Data($document_subtype_id);
			}
			else
			{
				throw new customValidationException("A valid numeric document subtype ID is required");
			}
		}
		else
		{
			throw new customValidationException("document subtype ID required");
		}

		$documents = $Document->Document_by_SubTypes($document_subtype_id,$document_id);
		return response()->json($documents);
	}
}
