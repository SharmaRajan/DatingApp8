using System.ComponentModel.DataAnnotations;

namespace API.Entities;

public class AppUser
{

    // [Key] Annotation for Id -> Primary Key
    public int Id { get; set; }

    // this is optional
    // if we want it not optional then we use string?
    public string UserName { get; set; }

}
