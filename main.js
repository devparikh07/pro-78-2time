var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Avani parikh.jpeg", "Dev parikh.jpeg" , "Sunil parikh.jpeg"];
var names = ["Fmaily Book", "Avani parikh", "Dev parikh", "Sunil parikh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage =images[i];
    var updatedName =names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
