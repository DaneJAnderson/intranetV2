<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\form;
use Exception;
use Illuminate\Support\Facades\DB;

class FormController extends Controller
{
    //

    function postForms(Request $res){

        $email = $res->email;
        $fname = $res->fname;
        $lname = $res->lname;


        $forms = form::updateOrCreate(
            ['email' => $email],
            ['fname' => $fname, 'lname' => $lname, 'email' => $email]
        );

        return response()->json($forms);

    }

    function getForms(){
        //
    }

    function auth(Request $res){

        // ldap:this.ldap, username:this.username, password:this.password
        $ldap = $res->ldap;
        $username = $res->username;
        $password = $res->password;

        $token = strtotime("now");
        
        if( $username && $password)
        {
            $status =  $this->checkLogin($username, $password, $ldap);            
             return response()->json(['status' => $status['status'],'email' => $status['email'],
			 'token'=>$token, 'username' =>$username, 'firstname'=>$status['firstname'], 'lastname'=>$status['lastname']]);
        }  
    }




   function checkLogin($username, $password, $ldap)
	{
        // return 1;
        //Variables
        $hostname = "192.168.110.18";
        $Members = array();
		$admin_groups = array();
		
        $ldap_connection = ldap_connect($hostname)or die("Could not connect to LDAP server.");
        

		if (FALSE === $ldap_connection)
        {     
			return 'Unable to connect to Server';
			
		}
		else
		{
			// We have to set this option for the version of Active Directory we are using.
			ldap_set_option($ldap_connection, LDAP_OPT_PROTOCOL_VERSION, 3) or die('Unable to set LDAP protocol version');
			ldap_set_option($ldap_connection, LDAP_OPT_REFERRALS, 0); // We need this for doing an LDAP search.
    
    		// 
			$pre =  "COK".'\\';
			try{
			if (TRUE === ldap_bind($ldap_connection, $pre.$username, $password))
			{
                $ldap_base_dn = 'DC=cokcu,DC=local';
				$search_filter = '(&(objectCategory=person)(samaccountname=*))'; 
				$attributes = array();
				$attributes[] = 'givenname';
			    $attributes[] = 'mail';
				$attributes[] = 'samaccountname';
			    $attributes[] = 'sn';
				$attributes[] = 'memberOf';
				$attributes[] = 'OU';
				$attributes[] = 'dc';
				$result = ldap_search($ldap_connection, $ldap_base_dn, $search_filter, $attributes);
				if (FALSE !== $result)
				{ 					

					$entries = ldap_get_entries($ldap_connection, $result);					
	
					for ($x=0; $x<$entries['count']; $x++)
					{
						if (!empty($entries[$x]['givenname'][0]) && !empty($entries[$x]['dn'][0]) && !empty($entries[$x]['sn'][0]) 
						&& !empty($entries[$x]['mail'][0])  && !empty($entries[$x]['memberof'][0]) )
						{
	
				     $Member = array(
					'username' => trim($entries[$x]['samaccountname'][0]),
					'email'=> trim($entries[$x]['mail'][0]),
					'first_name'=> trim($entries[$x]['givenname'][0]),
					'last_name'=>  trim($entries[$x]['sn'][0]),
					'Roles'=> $entries[$x]['memberof'],
					'Branches'=> $entries[$x]['dn']);

							array_push($Members, $Member);							
						}
					}
				}
				ldap_unbind($ldap_connection);
               
            }
            else{ return '**Incorrect Username! or Password!**'; }
		}catch(Exception $ex){ 
			if(strpos($ex->getMessage(),"Can't contact LDAP server")){

				$status='Unable to Connect to Server Network';
			}else {$status = '** Incorrect Username or Password **';}
			 return ['email'=>'', 'status'=>$status,
		'firstname'=>'','lastname'=>'']; }
	
			foreach($Members as $Member)
			{
				if($Member["username"] == $username)
				{	
					if($ldap == 'everybody'){                    
						return ['email'=>$Member["email"], 'status'=>1, 'firstname'=>$Member["first_name"],
						'lastname'=>$Member["last_name"]];
					}else if ($ldap =="hradmins"){
						$admin_groups = DB::select('CALL admin_groups_Retrieve();');
					}

					if(count($Member["Roles"])>0)
					{
						for($a = 0; $a <= count($Member["Roles"])-1; $a++)
						{							
							 for($c = 0; $c < count($admin_groups); $c++)						
							{
								$userRole = explode(',',$Member["Roles"]["".$a.""]);
								$roles = explode(',',$admin_groups[$c]->Domain_Controller);

								if($userRole[0] == $roles[0])
								{ 									
									return ['email'=>$Member["email"], 'status'=>1, 'firstname'=>$Member["first_name"],
									'lastname'=>$Member["last_name"]];								
								}
							}
						}
						return 'User not an Administrator';
					}
				}
        	}
    	}
	}
}