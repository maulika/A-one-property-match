	
var serverpath="http://dragonwebsol.com/Maulika/Propertyappfinal/Property_WS/";
var loginurl=serverpath+"Login.php";
var registrationurl=serverpath+"Registration.php";

//////////////////////////////URL FOR TENENTS//////////////////////////////
var tanents=serverpath+"tenants/";

var getmapurl=tanents+"GetMap.php";
var search_filterurl=tanents+"Search_Filter.php";
var tenants_detailurl=tanents+"TenantDetails.php";
var tenents_listurl=tanents+"TenantsList.php";
var gellery_list_url=tanents+"gallery_tenant.php";
var search_saveurl=tanents+"search_save.php";
var tenant_description=tanents+"TenantDescription.php";
var add_to_fevorite=tanents+"add_to_fevorite.php";



//////////////////////////////URL FOR TENENTS//////////////////////////////
var advert=serverpath+"adverts/";

var my_advert_listurl=advert+"My_Advert_list.php";
var post_advert_rentedurl=advert+"Post_Advert_Rented.php";
var post_advert_rented_titleurl=advert+"Post_Advert_Rented_Title.php";
var post_advert_wantedurl=advert+"Post_Advert_wanted.php";
var upload_imageurl=advert+"Upload_image.php";


//////////////////////////////URL FOR My Account//////////////////////////////
var myprofile=serverpath+"my_account/";

var my_profile_view=myprofile+"My_Profile.php";
var my_listning=myprofile+"My_Listings.php";
var my_listning_detail=myprofile+"My_Listings_Detail.php";
var My_Inbox=myprofile+"My_Inbox.php";
var Contact=myprofile+"Contact.php";


//////////////////////////////URL FOR Listning//////////////////////////////
var myproperty=serverpath+"listning/";

var my_property_detail=myproperty+"Listning_Description.php";
var change_amenities=myproperty+"Change_Aminities.php";
var change_description=myproperty+"Change_Description.php";
var change_image=myproperty+"Change_Image.php";
var change_rent=myproperty+"Change_Rent.php";
var change_title=myproperty+"Change_Title.php";
var delete_advert=myproperty+"Delete_Advert.php";
var my_listning_data=myproperty+"My_Listings_data.php";
var renew_advert=myproperty+"Renew_Advert.php";
var suspend_advert=myproperty+"Suspend_Advert.php";


function getDataFromWebservices(service_url,param1)
{
	var getStatus="";
	
	
	$.ajax({
				url: service_url,
				 async: false,
				type: "post",
				data: param1,
				success: function(data){
			
					findCollection = $.parseJSON(data);

					getStatus = findCollection.getDetails;
	
					
				},
				error:function(e){
					alert("Service failure or Internet Connection loss!!");
				}
			});			
	console.log(getStatus);

	return getStatus;
}

function Addtofavorite()
	{
	var addinquiry = {
				"login_id"		:	sessionStorage.login_id,//area,postcode
				"type_id"              :     sessionStorage.tenants_id,//selected tenents/advert id
				"Type"              :       sessionStorage.type//Tenants / Property
                                                        
					 }
			var param1= 'add_to_fevorite='+JSON.stringify(addinquiry);
		getDetails=getDataFromWebservices(add_to_fevorite,param1);
		
					var status =getDetails.status;
					//var reg_id = getStatus.Result;
					console.log(status);
					//console.log(Registration_id);
					
					
				if(status=="YES")
					{
					
					alert('Added to your fevorite!!!');
					}
	}